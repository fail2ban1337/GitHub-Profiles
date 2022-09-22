import React, { useState } from "react";
import { HeaderContainer } from "./containers/header";
import { GlobalStyles, lightTheme, darkTheme } from "./components/theme";
import { ThemeProvider } from "styled-components";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserInfoContainer } from "./containers/userInfo";
import {QueryClientProvider, QueryClient} from "react-query";


const queryClient = new QueryClient();

function App() {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('theme'));
    return saved  ? false : true
  });

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
      localStorage.setItem("theme", isLightTheme);
  };
  return (
    <QueryClientProvider client={queryClient}>
    <DarkModeProvider value={{ isLightTheme, changeTheme }}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <HeaderContainer />
        <UserInfoContainer />
      </ThemeProvider>
    </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
