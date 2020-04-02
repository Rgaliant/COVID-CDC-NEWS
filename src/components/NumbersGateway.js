import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://sharad-gql-covid19.herokuapp.com/graphql"
});

export default { client };
