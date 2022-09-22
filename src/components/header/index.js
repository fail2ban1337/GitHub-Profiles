import React, {useContext} from "react";
import { Container,Logo,Row,ToggleContainer,Toggle, Moon } from "./styles";
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
    return <a href="/"><Logo {...restProps}/></a>
}
Header.Toggle = function Test({...restProps}) {
    const {changeTheme,isLightTheme} = useContext(DarkModeContext);
    return <ToggleContainer  $mode={isLightTheme} {...restProps} onClick={()=> changeTheme()}>
        <Toggle  $mode={isLightTheme}>
            <Moon $mode={isLightTheme}/>
        </Toggle>
    </ToggleContainer>
}
