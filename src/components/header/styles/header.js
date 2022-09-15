import styled from "styled-components";

export const Container = styled.div`
height: 60px;
box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
`
export const Row = styled.div`
max-width: 1920px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

`;
export const Logo = styled.img`
max-width: 100%;
height: 60px;
margin-left: 3.5rem;
-webkit-filter: ${({ theme }) => theme.filter};
filter:  ${({ theme }) => theme.filter};
transition: filter .8s ease-in;
`;

export const ToggleContainer = styled.div`
width: 4rem;
height: 1.8rem;
background: ${props => props.$mode ?  "#121620" : "#393E46"};
margin-right: 3.5rem;
border-radius: 5rem;
position: relative;
display: flex;
background: gr;
align-items: center;

`;

export const Toggle = styled.div`
position: absolute;
width: 1.7rem;
${props => props.$mode  ? "background: #fff" : "background: #333;"};
height: 1.7rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
${props => props.$mode  ?  "left: 2rem;"  : "left: 2px"};
-webkit-transtition: left .3s ease-in-out;
  transition: left .3s linear;
`;

export const Moon = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: transparent;
    transform: rotate(-120deg);
    ${props => props.$mode  ?  "box-shadow: inset -2px 50px 0 2px #FCE570" : "box-shadow: inset -2px 5px 0 2px #f3d076;"};
    transition: box-shadow .2s linear;

    `;

