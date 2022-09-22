import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap');
*, *:after, *:before { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins",sans-serif;

}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) =>  theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    height: 100vh;
  }
`;
export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
  filter: 'invert(0)',
  text_muted: "#57606a"
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  text_muted: "#8b949e",
  filter: 'invert(1)',
};