import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Container,
  Card,
  SearchInputWrapper,
  SearchInput,
  SearchInputIconWrap,
  SearchInputIcon,
  SearchAnimation,
  UserDetailsContainer,
} from "./styles";
import {
  searchByUserName,
  searchUserDetails,
} from "../../actions/searchAction";
import { useQuery } from "react-query";

const searchContext = createContext();
export default function UserInfo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
UserInfo.Card = function UserInfoCard({ children, ...restProps }) {
  const [search, setSearch] = useState({
    isLoading: false,
    data: [],
    user: {},
  });
  return (
    <searchContext.Provider value={{ search, setSearch }}>
      <Card {...restProps}>{children}</Card>
    </searchContext.Provider>
  );
};

UserInfo.SearchInputWrapper = function ({ children, ...restProps }) {
  return <SearchInputWrapper {...restProps}>{children}</SearchInputWrapper>;
};

UserInfo.SearchInput = function UserInfoSearchInput({
  children,
  ...restProps
}) {
  const { setSearch, search } = useContext(searchContext);

  return (
    <SearchInput
      {...restProps}
      value={search.userName || ""}
      onChange={(e) =>
        setSearch((state) => ({
          ...state,
          userName: e.target.value,
        }))
      }
    />
  );
};

UserInfo.SearchInputIconWrap = function UserInfoSearchInputIconWrap({
  children,
  ...restProps
}) {
  const { search, setSearch } = useContext(searchContext);
  const {
    data: repos,
    refetch,
    status,
  } = useQuery(["repos", search.userName], searchByUserName, {
    enabled: false,
  });
  console.log(search);
  useEffect(() => {
    if (status === "success")
      setSearch((state) => ({
        ...state,
        data: repos.response.data,
        user: repos.result.data,
      }));
    let timer;
    if (status === "success") {
      timer = setTimeout(() => {
        setSearch((state) => ({
          ...state,
          isLoading: false,
        }));
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [repos]);
  return (
    <SearchInputIconWrap
      onClick={() => {
        refetch();
        setSearch((state) => ({ ...state, isLoading: true }));
      }}
      {...restProps}
    >
      {children}
    </SearchInputIconWrap>
  );
};
UserInfo.SearchInputIcon = function UserInfoSearchInputIcon({
  children,
  ...restProps
}) {
  return <SearchInputIcon {...restProps} />;
};

UserInfo.SearchAnimation = function UserInfoSearchAnimation({
  children,
  ...restProps
}) {
  const { search } = useContext(searchContext);
  const { isLoading } = search;
  return (
    <div>
      {" "}
      {isLoading ? (
        <SearchAnimation>
          <div></div>
          <div></div>
        </SearchAnimation>
      ) : null}
    </div>
  );
};

UserInfo.UserDetailsContainer = function UserInfoUserDetailsContainer({
  children,
  ...restProps
}) {
  const { search } = useContext(searchContext);
  const { user } = search;
  return (
    <UserDetailsContainer {...restProps}>
      <div className="userDetailsFirst">
        <div className="imageContainer">
          <img className="imageUser" src={search.user.avatar_url} />
        </div>
        <h2 className="userDetailsFirst_name">{search.user.login}</h2>
      </div>
      <div className="userDetailsSecond">

      </div>
    </UserDetailsContainer>
  );
};
