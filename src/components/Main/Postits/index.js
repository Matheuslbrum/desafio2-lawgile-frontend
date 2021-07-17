import React from 'react';
import * as S from './style';

export default function Main() {

    return (
        <S.Conteiner>
            <S.BoxPostits>
                <S.Postits></S.Postits>
                <S.Postits></S.Postits>
                <S.Postits></S.Postits>
            </S.BoxPostits>
            <S.BoxForms>
                <S.Forms >
                    <S.FormsLabel >Digite seu E-mail </S.FormsLabel>
                    <S.FormsInput />
                    <S.FormsLabel>Digite o Post-it</S.FormsLabel>
                    <S.FormsInput />
                    <S.FormsButton >Enviar</S.FormsButton>

                </S.Forms>
            </S.BoxForms>
        </S.Conteiner>

    );
}