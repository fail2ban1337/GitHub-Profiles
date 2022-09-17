import React, {useContext} from "react";
import { Container,Logo,Row,ToggleContainer,Toggle, Moon } from "./styles/header";
import { DarkModeContext } from "../../context/DarkModeContext";
export default function Header({children, ...restProps})
{
    return <Container {...restProps}>{children}</Container>;
}
Header.Row = function({children, ...restProps})
{
    return <Row {...restProps}>{children}</Row>
}

Header.Logo = function({children, ...restProps})
{
    return <Logo {...restProps}/>
}
Header.Toggle = function Test({...restProps}) {
    const {changeTheme,isDarkTheme} = useContext(DarkModeContext);
    return <ToggleContainer  $mode={isDarkTheme} {...restProps} onClick={()=> changeTheme()}>
        <Toggle  $mode={isDarkTheme}>
            <Moon $mode={isDarkTheme}/>
        </Toggle>
    </ToggleContainer>
}
