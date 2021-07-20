import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";



const httpLink = new HttpLink({
    uri: "https://6pmxnwpaea.execute-api.sa-east-1.amazonaws.com/prod/graphql"
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
    cache: new InMemoryCache(),
    headers: {
        authorization: localStorage.getItem('token'),
        'client-name': 'WidgetX Ecom [web]',
        'client-version': '1.0.0'
    }
});