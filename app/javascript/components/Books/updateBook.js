import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Link } from "react-router-dom";

const CREATE_LINK_MUTATION = gql`
  mutation UpdateBook(
    $id: ID!,
    $title: String!,
    $publishedBooksId: ID!,
    $publishedYear: String!,
    $genre: String!
  ) {
    updateBook(id: $id, attributes: {title: $title, publishedBooksId: $publishedBooksId, publishedYear: $publishedYear, genre: $genre}) {
      book {
        id
        title
        publishedYear
        genre
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

const updateBook = () => {

  const bookId = window.location.href.split('=')[window.location.href.split('=').length -1]
  const authorId = window.location.href.split('=')[window.location.href.split('=').length -3]

  const [formState, setFormState] = useState({
      id: bookId, 
      title: '',
      publishedBooksId: authorId,
      publishedYear: '',
      genre: ''
    });

  const [updateBook] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      id: formState.id,
      title: formState.title,
      publishedBooksId: formState.publishedBooksId,
      publishedYear: formState.publishedYear,
      genre: formState.genre
    }
  , client: client});

  return (
    <div>
       <Link to="/">Back</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateBook();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
            type="text"
            placeholder="Title"
          />
          <input
            className="mb2"
            value={formState.genre}
            onChange={(e) =>
              setFormState({
                ...formState,
                genre: e.target.value
              })
            }
            type="text"
            placeholder="Genre"
          />
          <input
            className="mb2"
            value={formState.publishedYear}
            onChange={(e) =>
              setFormState({
                ...formState,
                publishedYear: e.target.value
              })
            }
            type="date"
            placeholder="Published Year"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default updateBook;