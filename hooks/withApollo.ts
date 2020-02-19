import withApollo from "next-with-apollo"
import ApolloClient, { InMemoryCache } from "apollo-boost"
 
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: "https://api.github.com/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
      request: (operation) => {
        const token = "edd60c19f1a878de023c65615d4a7b54a52adfdf";
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : ''
          }
        })
      }
    })
)