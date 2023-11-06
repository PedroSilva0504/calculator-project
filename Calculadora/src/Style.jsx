import styled from "styled-components";


export const Main = styled.main`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
background-image: url(https://wallpapercave.com/wp/wp2561072.jpg);
background-repeat: no-repeat;
background-size: cover;
`

export const H1 = styled.h1`
width: 20vw;
height: 4vw;
text-align:end;
background-color: black;
color: white;
border-top-right-radius:8px;
border-top-left-radius:8px;
padding-right:20px;
font-size: 60px;
`


export const Div = styled.div`
width:20vw;
height:45vh;
background-color: #353537;
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
border-bottom-left-radius:8px;
border-bottom-right-radius:8px;
padding-top:5px;
`
export const Button = styled.button`
width:70px;
height:70px;
margin:5px;
margin-bottom: 10px;
border:none;
font-size:20px;
border-radius:12%;
background-color: #adc8cbf8;
color: #81400e;
font-weight:bold;
transition:0.8s;

&:hover{
    cursor: pointer;
    transform:scale(1.1);
    color:white;
    background-color: #000000;
}
`