import React from 'react';
import Footer from '../Footer';
import Header from '../Menu';
import * as S from './style';

const Layout = (props) => {
    return (
        <S.Conteiner>
            <Header />
            {props.children}
            <Footer />
        </S.Conteiner>

    );
}
export default Layout;
