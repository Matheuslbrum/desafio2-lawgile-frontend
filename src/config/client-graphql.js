import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";



const httpLink = new HttpLink({
    uri: "https://0790c8g7t9.execute-api.sa-east-1.amazonaws.com/dev/"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});


export const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
});