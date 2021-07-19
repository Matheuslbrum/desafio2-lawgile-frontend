import styled from "styled-components";

export const Conteiner = styled.div`
width: 100%;
margin:0 auto;
min-height:84vh;
display:flex;
justify-content: flex-end;
align-items:center;
//background: #2e2e2e;
background:white;
@media(max-width:768px){
    flex-direction:column;
}
`;
export const BoxForms = styled.div`
width: 35%;
height:100%;
display:flex;
align-items:center;
@media(max-width:768px){
    width:80%;
    margin:0 auto;
}
`;
export const Forms = styled.form`
width:30vw;
height:50vh;
/* border:solid 10px;
border-radius:20px; */
background:white;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
box-shadow: 0px 0px 12px black;
@media(max-width:768px){
    width:100%;
}

`;
export const All = styled.div`
width:80%;
display:flex;
justify-content: space-between;
flex-direction: column;
height:80%;


`;
export const BoxPostits = styled.div`
width: 100%;
height:100%;
display:flex;
align-items: center;
justify-content: center;
@media(max-width:768px){
    flex-direction:column;
    margin:5rem 0;
}
`;
export const Postits = styled.div`
margin: 10px;
width:15vw;
height:15vw;
background:black;
@media(max-width:768px){
    width:50vw;
    height:60vw;
}
`;
export const FormsLabel = styled.label`
color: black;
font-size:30px;
display:flex;
flex-direction: column;

`;
export const FormsInput = styled.input`
border:none;
border:solid 1px;
height:30px;
outline: none;
`;
export const FormsButton = styled.button`
height: 50px;
width: 80%;
margin:0 auto;
border-radius:30px;
`;
export const BoxText = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
`;
export const Title = styled.h2`
margin:0.5rem auto;
`;
export const Text = styled.h3`
width:80%;
margin:4rem auto;
`;
export const BoxTpostit = styled.div`
display:flex;
flex-direction: column;
width: 75%;
@media(max-width:768px){
    width:100%;
}
`;
export const FormsTitle = styled.label`
color: black;
font-size:30px;
font-weight: bold;
`;

