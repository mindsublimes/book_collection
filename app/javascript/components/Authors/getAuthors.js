/* @flow */
import gql from 'graphql-tag';

export default gql`
	query{
	  authors{
	    id,
	    firstName,
	    surname,
	    birthYear
	  }
	}
`;