import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Link } from "react-router-dom";

const CREATE_LINK_MUTATION = gql`
  mutation UpdateAuthor(
    $id: ID!,
    $firstName: String!,
    $surname: String!,
    $birthYear: String!
  ) {
    updateAuthor(id: $id, attributes: {firstName: $firstName, surname: $surname, birthYear: $birthYear}) {
      author {
        id
        firstName
        surname
        birthYear
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      firstName
      surname
    }
  }
`;


const link = createHttpLink({
  uri: 'https://localhost:3000/graphql'
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

const updateAuthor = () => {

  const authorId = window.location.href.split('/')[window.location.href.split('/').length -1]

  const {data, loading} = useQuery(GET_AUTHOR, {variables:{ id: authorId },client: client});

  const [formState, setFormState] = useState({
      id: authorId, 
      surname: '',
      firstName: '',
      birthYear: ''
    });

  const [updateAuthor] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      id: formState.id,
      firstName: formState.firstName,
      surname: formState.surname,
      birthYear: formState.birthYear
    }
  , client: client});

  const [color, setClor] = useState("dsada");

  return (
    <div>
       <Link to="/">Back</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateAuthor();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.firstName}
            onChange={(e) =>
              setFormState({
                ...formState,
                firstName: e.target.value
              })
            }
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb2"
            value={formState.surname}
            onChange={(e) =>
              setFormState({
                ...formState,
                surname: e.target.value
              })
            }
            type="text"
            placeholder="Surname"
          />
          <input
            className="mb2"
            value={formState.birthYear}
            onChange={(e) =>
              setFormState({
                ...formState,
                birthYear: e.target.value
              })
            }
            type="date"
            placeholder="Birth Year"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default updateAuthor;