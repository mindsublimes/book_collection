import React, { useState, useCallback, Component  } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";
import { useQuery, useMutation, ApolloProvider } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

const GET_AUTHOR = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      firstName
      surname
      publishedBooks {
        id,
        title,
        genre,
        publishedYear
      }
    }
  }
`;

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const client = new ApolloClient({ headers: { "X-CSRF-Token": csrfToken } });
export const Books = () => {
  const authorId = window.location.href.split('=')[window.location.href.split('=').length -1]

  const {data, loading} = useQuery(GET_AUTHOR, {variables:{ id: authorId },client: client});

   if (loading) {
    return <span>Loading...</span>
   }
    return (
      <div>
        <Link to={"books/new?author_id=" + authorId}>Create Author Book</Link>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Surname</th>
              <th>Birth Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.author.publishedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.genre}</td>
                <td>{book.publishedYear}</td>
                <td>
                  <Link to={"books/edit?author_id=" + authorId + "=bookId=" + book.id }>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default Books;
