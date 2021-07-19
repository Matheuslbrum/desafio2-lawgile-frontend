import styled from 'styled-components';

export const Footer = styled.footer`
background-color:black;
width: 100%;
height:6vh;
display: flex;
justify-content: center;
@media(max-width:768px){
    height:12vh;
}
`;
export const BoxList = styled.nav`
width:100%;
height:100%;
`;
export const List = styled.ul`
list-style-type: none;
display:flex;
width:100%;
height:100%;
justify-content: center;
align-items: center;
`;
export const Item = styled.li`
margin:15px;
width:2.5%;
@media(max-width:768px){
    width:5%;
}
`;
export const Link = styled.a`
width:100%;
`;
export const Image = styled.img`
width:100%;

`;

