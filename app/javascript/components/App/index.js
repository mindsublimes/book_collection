import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Authors from 'components/Authors';
import Books from 'components/Books';
import CreateAuthor from 'components/Authors/createAuthor';
import UpdateAuthor from 'components/Authors/updateAuthor';
import CreateBook from 'components/Books/createBook';
import UpdateBook from 'components/Books/updateBook';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes

} from "react-router-dom";



const link = createHttpLink({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

const App = () => {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Authors />} />
            <Route path='authors/new' element={<CreateAuthor />} />
            <Route path='books/index' element={<Books />} />
            <Route path='/authors/:id' element={<UpdateAuthor />} />
            <Route path='/books/index/books/new' element={<CreateBook />} />
            <Route path='/books/index/books/edit' element={<UpdateBook />} />
          </Routes>
        </ApolloProvider>
      </Router>
    );
}

export default App;
