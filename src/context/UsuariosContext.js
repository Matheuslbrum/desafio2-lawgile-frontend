import { useMutation, } from "@apollo/client";
import React, { useContext } from "react";
import { ADD_USUARIO, } from "../graphql";

const MyContext = React.createContext();

export default function UsuariosContextProvider({ children }) {
    const [criarUsuario] = useMutation(ADD_USUARIO);
    return (
        <MyContext.Provider
            value={{
                usuarios: {
                    criarUsuario,
                }

            }}
        >
            {children}
        </MyContext.Provider>
    );
}

export function useUsuariosContext() {
    return useContext(MyContext);
}