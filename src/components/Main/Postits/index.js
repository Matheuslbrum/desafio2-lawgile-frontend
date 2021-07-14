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
                <S.Forms>
                </S.Forms>
            </S.BoxForms>
        </S.Conteiner>

    );
}