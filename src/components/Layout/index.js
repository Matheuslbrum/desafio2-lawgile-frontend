import React from 'react';
import Footer from '../Footer';
import Header from '../Menu';
import * as S from './style';


const Layout = (props) => {
    return (

        <S.Conteiner>
            <Header />
            <S.Main>
                {props.children}
            </S.Main>
            <Footer />
        </S.Conteiner>


    );
}
export default Layout;
