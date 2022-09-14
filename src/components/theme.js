import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*, *:after, *:before { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  filter: 'invert(1)',
};