import React, {useState} from "react";
import { Container,Logo,Row,ToggleContainer,Toggle, Moon } from "./styles/header";

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
    const [test, setTest] = useState(true);
    console.log(test);
    return <ToggleContainer {...restProps} onClick={()=> setTest(!test)}>
        <Toggle  $mode={test}>
            <Moon $mode={test}/>
        </Toggle>
    </ToggleContainer>
}
