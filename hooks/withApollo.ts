import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
require('dotenv').config();

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: process.env.GRAPHQL_URI,
      cache: new InMemoryCache().restore(initialState || {}),
      request: operation => {
        const token = process.env.GIT_TOKEN;
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : '',
          },
        });
      },
    })
);
