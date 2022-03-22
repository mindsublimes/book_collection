/* @flow */
import { gql } from "appolo-boost";

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