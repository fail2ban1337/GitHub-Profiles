import styled from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: center;
max-width: 1024px;
margin: 4rem auto;

`

export const Card = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
background:  ${({theme}) => theme.body};
width: 100%;
margin: 0 1rem;
height: 12rem;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 2rem 0;

`;
export const SearchInputWrapper = styled.div`
width: 25rem;
height: 3rem;
display: flex;
`;

export const SearchInput = styled.input`
height:100%;
flex-basis:80%;
outline: none;
border: 0;
font-size: 1.5rem;
padding: 0.5rem 1rem;
text-align: center;
font-weight: 100;
`;

export const SearchInputIconWrap = styled.div`
background: black;
flex-basis: 20%;
display: flex;
align-items: center;
justify-content: center;

`;

export const SearchInputIcon = styled.div`
width: 1.8rem;
height: 1.8rem;
border: 0.1rem solid white;
border-radius: 50%;
position: relative;
&:after {
    content: '';
    position: absolute;
    right: 0px;
    bottom: -0.2rem;
    width: 0.1rem;
    height: 0.5rem;
    transform: rotate(-45deg);
    background: white;
}
`