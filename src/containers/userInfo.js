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
                <UserInfo.HanldeError/>
                <UserInfo.SearchAnimation/>
                <UserInfo.UserDetailsContainer></UserInfo.UserDetailsContainer>
            </UserInfo.Card>
        </UserInfo>
    )
}