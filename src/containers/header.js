import React from "react";

import { Header } from "../components";

export function HeaderContainer() {
    return (
    <Header>
        <Header.Row>
        <Header.Logo src={"/images/logo.png"}/>
        <Header.Toggle></Header.Toggle>
        </Header.Row>
    </Header>
    )
}