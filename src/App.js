import React, {useContext, useState} from "react";
import {HeaderContainer} from "./containers/header";
import { GlobalStyles, lightTheme, darkTheme,  } from './components/theme';
import {ThemeProvider } from 'styled-components';
import {DarkModeProvider} from "./context/DarkModeContext";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <DarkModeProvider value={{ isDarkTheme, changeTheme }}>
              <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
                <GlobalStyles/>
<HeaderContainer/>
</ThemeProvider>
</DarkModeProvider>
  );
}

export default App;
