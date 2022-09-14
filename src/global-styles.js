import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap');
*, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    transition: all 0.50s linear;
}`;