import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { Platform } from "react-native";

// android
const host = Platform.OS === "ios" ? "http://localhost:4000" : "10.0.2.2:4000";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: host
  })
});

export default client;
