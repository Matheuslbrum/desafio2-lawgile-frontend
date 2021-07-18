import React, { useState } from 'react';
import { useUsuariosContext } from '../../../context/UsuariosContext';
import * as S from './style';

const valorInicial = { nome: '', email: '', produtos: '' };


export default function Main() {

    const { usuarios } = useUsuariosContext();
    const [state, setState] = useState(valorInicial);

    function handleSubmit(event) {
        event.preventDefault();

        usuarios.criarUsuario({
            variables: state
        });

        setState(valorInicial);
        console.log(state);
    }
    function handleInput(input) {

        setState({ ...state, [input.target.name]: input.target.value });
    }

    return (
        <S.Conteiner>
            <S.BoxPostits>
                <S.Postits></S.Postits>
                <S.Postits></S.Postits>
                <S.Postits></S.Postits>
            </S.BoxPostits>
            <S.BoxForms>

                <S.Forms onSubmit={handleSubmit}>
                    <S.FormsLabel >Digite seu nome </S.FormsLabel>
                    <S.FormsInput
                        type="text"
                        onChange={handleInput}
                        name="nome"
                        value={state.nome}
                    />
                    <S.FormsLabel >Digite seu email </S.FormsLabel>
                    <S.FormsInput
                        type="text"
                        onChange={handleInput}
                        name="email"
                        value={state.email}
                    />
                    <S.FormsLabel>Digite o Post-it</S.FormsLabel>
                    <S.FormsInput
                        type="text"
                        onChange={handleInput}
                        name="produtos"
                        value={state.produtos}
                    />
                    <S.FormsButton type="submit">enviar</S.FormsButton>
                </S.Forms>

            </S.BoxForms>
        </S.Conteiner>

    );
}