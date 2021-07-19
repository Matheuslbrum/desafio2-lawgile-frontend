import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`*{
  padding:0;
  margin:0;
}`;
ReactDOM.render(
  <>

    <GlobalStyle />
    <Home />
  </>,
  document.getElementById('root')
);



