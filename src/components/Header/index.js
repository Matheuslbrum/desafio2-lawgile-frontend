import React from 'react';
import * as S from './styled';

function Header() {
    return (
        <S.Principle>
            <S.Header>
                <S.BoxLogo>
                    <S.Logo>Brunt-it</S.Logo>
                </S.BoxLogo>
                <S.BoxList>
                    <S.List>
                        <S.Item><S.Link>Carrinho</S.Link></S.Item>
                        <S.Item><S.Link>Login</S.Link></S.Item>
                        <S.Item><S.Link>Histórico</S.Link></S.Item>
                    </S.List>
                </S.BoxList>

            </S.Header>
            <S.Sections>
                <S.BoxListInfo>
                    <S.ListIntern>
                        <S.ItemList><S.Link>Produtos</S.Link></S.ItemList>
                        <S.ItemList><S.Link>Contato</S.Link></S.ItemList>
                        <S.ItemList><S.Link>Sobre</S.Link></S.ItemList>
                    </S.ListIntern>
                </S.BoxListInfo>
            </S.Sections>
        </S.Principle>

    );
}

export default Header;