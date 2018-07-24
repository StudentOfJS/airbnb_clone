import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  credentials: "include",
  uri: process.env.REACT_APP_SERVER_URL
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;
