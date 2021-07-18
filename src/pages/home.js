import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main/Postits'
import { ApolloProvider } from '@apollo/client';
import { client } from "../config/client-graphql"
import UsuariosContextProvider from '../context/UsuariosContext';


export default function Home() {

    return (
        <ApolloProvider client={client}>
            <Layout>
                <UsuariosContextProvider>
                    <Main />
                </UsuariosContextProvider>
            </Layout>
        </ApolloProvider>

    );
}
