import React from 'react';
import * as S from './styled';
import Login from '../../icons/login.svg';

function Header() {
    return (
        <S.Principle>
            <S.Header>
                <S.BoxLogo>
                    <S.Logo>Brunt-it</S.Logo>
                </S.BoxLogo>
                <S.BoxList>
                    <S.List>
                        <S.Item><S.Link><img height={35} src={Login} /></S.Link></S.Item>
                    </S.List>
                </S.BoxList>

            </S.Header>
        </S.Principle>

    );
}

export default Header;