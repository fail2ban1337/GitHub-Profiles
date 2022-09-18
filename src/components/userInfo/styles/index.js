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
display: flex;
justify-content: center;
align-items: center;
 padding: 2rem 0;
flex-direction: column;

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
`;

export const SearchAnimation = styled.div`
width: 5rem;
height: 5rem;
margin: 5rem;
position: relative;

& div {
position: absolute;
width: 100%;
height: 100%;
border: 0.5rem solid transparent;
border-top-color: black;
border-radius: 50%;
animation: loadingAnimation 1.2s linear infinite;
}
& div:nth-child(1) {
border: 0.5rem solid transparent;
border-bottom-color: black;
animation: loadingAnimationSecond 1.2s linear infinite;
}

@keyframes loadingAnimation {
    0% {
        transform: rotate(0);
        border-width: 10px;
    }
    50% {
        transform: rotate(180deg);
        border-width: 1px;
    }
    100% {
        transform: rotate(360deg);
        border-width: 10px;
    }
}
@keyframes loadingAnimationSecond {
    0% {
        transform: rotate(0);
        border-width: 1px;
    }
    50% {
        transform: rotate(180deg);
        border-width: 10px;
    }
    100% {
        transform: rotate(360deg);
        border-width: 1px;
    }
}
`;

export const UserDetailsContainer = styled.div`
    margin: 3rem 1rem;
    align-self: flex-start;
    border: 1px solid #333;
    display: flex;
    flex-direction: row;
    height: 100%;
    .userDetailsFirst {
        border-right: 1px solid red;
        height: 100%;
        display: flex;
        flex-direction: column;
    .imageContainer {
    height: 100%;
    margin: 3rem 0 ;
    .imageUser {
    width: 300px;
    height: 300px;
    border-radius: 50%;

}
}
.userDetailsFirst_name {
    color: ${({theme}) => theme.text};
}
}



`;
