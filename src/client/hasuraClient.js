import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HASURA_GRAPHQL_URL;
const adminKey = process.env.HASURA_GRAPHQL_ADMIN_SECRET;

export const hasuraClient = async (query, variables) => {
  const graphqlClient = new GraphQLClient(endpoint);
  graphqlClient.setHeader("x-hasura-admin-secret", adminKey);
  return graphqlClient.request(query, variables);
};
