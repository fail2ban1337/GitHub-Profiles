import styled from "styled-components";


export const Container = styled.div`
display: flex;
justify-content: center;
max-width: 1280px;
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
 padding: 2rem 1rem;
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
width: 100%;
    h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({theme}) => theme.text_muted};
        
    }
    margin-top: 3rem;
    align-self: flex-start;
    /* border: 1px solid ${({theme}) => theme.text};; */
    display: flex;
    flex-direction: row;
    .userDetails__First {
        /* border-right: 1px solid ${({theme}) => theme.text}; */
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: 1rem 1rem;

    .imageContainer {
    margin: 3rem 0 ;
    .imageUser {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: red;
}
}
.userDetailsFirst__name {
    color: ${({theme}) => theme.text};
}
.userDetailsFirst__row {
    display: flex;
    gap: .2rem;
    span {
        color: ${({theme}) => theme.text};
    }
}
}
.userDetails__Second {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
    .userDetailsSecond__card {
        position: relative;
        background: ${({theme}) => theme.body};;
        width: 45%;
        height: 200px;
        border-radius: 10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 1rem;
        .dragbutton {
            position: absolute;
            right: .5rem;
            top: .5rem;
            color: ${({theme}) => theme.text};
            cursor: grab;
        }

    }

}


`;
