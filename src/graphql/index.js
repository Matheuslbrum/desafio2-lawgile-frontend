import { gql } from "@apollo/client";

export const GET_USUARIOS = gql`
    query{
        usuarios{
            id
            nome
            email
            produtos
        }
    }

`;

export const ADD_USUARIO = gql`
    mutation criarUsuario($nome: String, $email: String, $produtos: String){
        criarUsuario(data: {nome: $nome, email: $email, produtos:$produtos}){
            id
            nome 
            email 
            produtos
        }
    }

`;