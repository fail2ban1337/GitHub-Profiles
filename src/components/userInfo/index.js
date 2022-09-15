import React from "react";
import { Container,Card,SearchInputWrapper,SearchInput,SearchInputIconWrap,SearchInputIcon } from "./styles";

export default function UserInfo({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;

}
UserInfo.Card = function({children, ...restProps}) {
    return <Card {...restProps}>{children}</Card>

}

UserInfo.SearchInputWrapper = function({children, ...restProps}) {
    return <SearchInputWrapper {...restProps}>{children}</SearchInputWrapper>
}

UserInfo.SearchInput = function({children, ...restProps}) {
    return <SearchInput {...restProps}/>
}

UserInfo.SearchInputIconWrap = function({children, ...restProps}) {
    return <SearchInputIconWrap {...restProps}>{children}</SearchInputIconWrap>
}

UserInfo.SearchInputIcon = function({children, ...restProps}) {
    return <SearchInputIcon {...restProps}/>
}