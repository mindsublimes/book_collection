// import ApolloClient from "apollo-boost";


// const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// const client = new ApolloClient({ headers: { "X-CSRF-Token": csrfToken } });

// const generateClient = () => {
// 	const client = new ApolloClient({
// 		headers: {"X-CSRF-Token": csrfToken}
// 	});
// 	return client;
// }

// const setClientState = clientId => {
// 	try{
// 		if(!clientId) {
// 			return
// 		}

// 		let _clientIdx = clientIdx();
// 		_clientIdx[clientId]();
// 	}catch (e) {
// 		throw ("could not set client state with id", clientId, e)
// 	}
// };

// exports const getClient = (id?: String) => {
// 	setClientState(id);
// 	return generateClient();
// }
import React, { useState, useCallback, Component  } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import gql from 'graphql-tag';
// import ApolloClient from "apollo-boost";
import { useQuery, useMutation, ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
export const Client = () => {
	const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
	const client = new ApolloClient({ headers: { "X-CSRF-Token": csrfToken } });
	return client

}


export default Client;