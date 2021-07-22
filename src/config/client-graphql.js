import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";


const link = from([
    new HttpLink({ uri: "https://aw9ztu1ami.execute-api.sa-east-1.amazonaws.com/dev/graphql" })
])

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
});