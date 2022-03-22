import React, { useState, useCallback, Component  } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";
import { useQuery, useMutation, ApolloProvider } from "@apollo/react-hooks";
import GET_AUTHORS from "./getAuthors";
import {
  Link

} from "react-router-dom";

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const client = new ApolloClient({ headers: { "X-CSRF-Token": csrfToken } });
export const Authors = () => {
   const { loading, _error, data } = useQuery(GET_AUTHORS, {  client: client });


   if (loading) {
    return <span>Loading...</span>
   }
    return (
      <div>
        <Link to="authors/new">Create Author</Link>
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
            {data.authors.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.surname}</td>
                <td>{user.birthYear}</td>
                <td>
                  <Link to={"books/index?author_id=" + user.id}>Books</Link>
                  <Link to={"authors/" + user.id}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default Authors
