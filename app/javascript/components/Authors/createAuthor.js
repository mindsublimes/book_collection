import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Link } from "react-router-dom";

const CREATE_LINK_MUTATION = gql`
  mutation CreateAuthor(
    $firstName: String!,
    $surname: String!,
    $birthYear: String!
  ) {
    createAuthor(firstName: $firstName, surname: $surname, birthYear: $birthYear) {
      author {
        id
        firstName
        surname
        birthYear
      }
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


const createAuthor = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    surname: '',
    birthYear: ''
  });

  const [createAuthor] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      firstName: formState.firstName,
      surname: formState.surname,
      birthYear: formState.birthYear
    }
  , client: client});

  return (
    <div>
      <Link to="/">Back</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createAuthor();
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

export default createAuthor;