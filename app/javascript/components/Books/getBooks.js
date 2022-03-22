/* @flow */
import gql from 'graphql-tag';

export default gql`
	query{
	  books{
	    id,
	    title,
	    genre,
	    publishedYear
	  }
	}
`;