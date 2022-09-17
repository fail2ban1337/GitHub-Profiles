import React, { useContext, useState } from "react";
import { HeaderContainer } from "./containers/header";
import { GlobalStyles, lightTheme, darkTheme } from "./components/theme";
import { ThemeProvider } from "styled-components";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserInfoContainer } from "./containers/userInfo";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <QueryClientProvider client={queryClient}>
    <DarkModeProvider value={{ isDarkTheme, changeTheme }}>
      <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <HeaderContainer />
        <UserInfoContainer />
      </ThemeProvider>
    </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
