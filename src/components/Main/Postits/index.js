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
            <S.BoxTpostit>
                <S.BoxText>
                    <S.Title>Post-its são vida</S.Title>
                    <S.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum orci eu lacus ullamcorper consequat. Aliquam ut lorem lobortis, scelerisque massa a, ultrices tortor. Praesent pharetra vulputate ante, a aliquet felis porta commodo. Cras sed vulputate purus. Quisque suscipit velit ac efficitur ultrices. Vivamus non sagittis mauris. Nulla pellentesque ligula dignissim, iaculis libero sit amet, molestie lectus. Praesent scelerisque ultricies arcu a scelerisque. Sed congue risus risus. Aliquam finibus malesuada odio, vitae vehicula magna blandit eget.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum orci eu lacus ullamcorper consequat. Aliquam ut lorem lobortis, scelerisque massa a, ultrices tortor. Praesent pharetra vulputate ante, a aliquet felis porta commodo. Cras sed vulputate purus. Quisque suscipit velit ac efficitur ultrices. Vivamus non sagittis mauris. Nulla pellentesque ligula dignissim, iaculis libero sit amet, molestie lectus. Praesent scelerisque ultricies arcu a scelerisque. Sed congue risus risus. Aliquam finibus malesuada odio, vitae vehicula magna blandit eget.
                    </S.Text>
                </S.BoxText>
                <S.BoxPostits>
                    <S.Postits></S.Postits>
                    <S.Postits></S.Postits>
                    <S.Postits></S.Postits>
                </S.BoxPostits>
            </S.BoxTpostit>
            <S.BoxForms>
                <S.Forms onSubmit={handleSubmit}>
                    <S.All>
                        <S.FormsTitle>
                            Se interessou? <br />
                            Faça seu pedido no formulário abaixo:
                        </S.FormsTitle>
                        <S.FormsLabel >
                            Digite seu nome
                            <S.FormsInput
                                type="text"
                                onChange={handleInput}
                                name="nome"
                                value={state.nome}
                            />
                        </S.FormsLabel>

                        <S.FormsLabel >
                            Digite seu email
                            <S.FormsInput
                                type="email"
                                onChange={handleInput}
                                name="email"
                                value={state.email}
                            />
                        </S.FormsLabel>

                        <S.FormsLabel>
                            Digite o código do post-it
                            <S.FormsInput
                                type="text"
                                onChange={handleInput}
                                name="produtos"
                                value={state.produtos}
                            />
                        </S.FormsLabel>

                        <S.FormsButton type="submit">enviar</S.FormsButton>
                    </S.All>
                </S.Forms>
            </S.BoxForms>
        </S.Conteiner>

    );
}