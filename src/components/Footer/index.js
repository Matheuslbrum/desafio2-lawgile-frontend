import React from 'react';
import * as S from './styled';

function Footer() {
    return (
        <S.Principle>
            <S.Footer>
                <S.BoxList>
                    <S.List>
                        <S.Item><S.Link>Carrinho</S.Link></S.Item>
                        <S.Item><S.Link>Login</S.Link></S.Item>
                        <S.Item><S.Link>Histórico</S.Link></S.Item>
                    </S.List>
                </S.BoxList>
                <S.BoxList>
                    <S.List>
                        <S.Item><S.Link>Dúvidas</S.Link></S.Item>
                        <S.Item><S.Link>Produtos</S.Link></S.Item>
                        <S.Item><S.Link>Contato</S.Link></S.Item>
                    </S.List>
                </S.BoxList>
                <S.BoxList>
                    <S.List>
                        <S.Item><S.Link>Dúvidas</S.Link></S.Item>
                        <S.Item><S.Link>Produtos</S.Link></S.Item>
                        <S.Item><S.Link>Contato</S.Link></S.Item>
                    </S.List>
                </S.BoxList>

            </S.Footer>
        </S.Principle>

    );
}

export default Footer;