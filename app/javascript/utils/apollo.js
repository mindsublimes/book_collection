// app/javascript/utils/apollo.js

// client
import { ApolloClient } from 'apollo-client';
// cache
import { InMemoryCache } from 'apollo-cache-inmemory';
// links
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';


export const createClient = (cache, requestLink) => {
  return new ApolloClient({
    link: ApolloLink.from([
      createHttpLink(),
    ]),
    cache,
  });
};

export const createCache = () => {
  const cache = new InMemoryCache();
  if (process.env.NODE_ENV === 'development') {
    window.secretVariableToStoreCache = cache;
  }
  return cache;
};



const createHttpLink = () => new HttpLink({
  uri: '/graphql',
  credentials: 'include',
})
