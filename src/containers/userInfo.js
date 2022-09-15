import React from "react";

import { UserInfo } from "../components";

export function UserInfoContainer() {
    return(
        <UserInfo>
            <UserInfo.Card>
                <UserInfo.SearchInputWrapper>
                    <UserInfo.SearchInput/>
                    <UserInfo.SearchInputIconWrap>
                        <UserInfo.SearchInputIcon/>
                    </UserInfo.SearchInputIconWrap>
                </UserInfo.SearchInputWrapper>
                <UserInfo.SearchAnimation/>
            </UserInfo.Card>
        </UserInfo>
    )
}