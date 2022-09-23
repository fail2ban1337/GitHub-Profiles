import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  Container,
  Card,
  SearchInputWrapper,
  SearchInput,
  SearchInputIconWrap,
  SearchInputIcon,
  SearchAnimation,
  UserDetailsContainer,
  CardRepoContent,
  ErrorContainer,
} from "./styles";
import { FaUserFriends } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdHomeWork, MdDragIndicator } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import { searchByUserName } from "../../actions/searchAction";
import { useQuery } from "react-query";
import {AiOutlineStar} from "react-icons/ai"

export const searchContext = createContext();
export default function UserInfo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
UserInfo.Card = function UserInfoCard({ children, ...restProps }) {
  const [search, setSearch] = useState({
    isLoading: false,
    data: [],
    user: {},
  });
  const [errorObj, setErrorObj] = useState({
    error: "",
    isError: false,
  });
  return (
    <searchContext.Provider
      value={{ search, setSearch, errorObj, setErrorObj }}
    >
      <Card {...restProps}>{children}</Card>
    </searchContext.Provider>
  );
};

UserInfo.SearchInputWrapper = function ({ children, ...restProps }) {
  return <SearchInputWrapper {...restProps}>{children}</SearchInputWrapper>;
};

UserInfo.SearchInputIconWrap = function UserInfoSearchInputIconWrap({
  children,
  ...restProps
}) {
  const { search, setSearch, setErrorObj, errorObj } =
    useContext(searchContext);
  const {
    data: repos,
    refetch,
    status,
    error,
    isError,
  } = useQuery(["repos", search.userName], searchByUserName, {
    enabled: false,
  });

  const handleInputClick = () => {
    refetch();
    setSearch((state) => ({ ...state, isLoading: true }));
    if (errorObj.error)
      setErrorObj({
        isError: false,
        error: ''
      });
  };
    const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleInputClick();
    }
  };
  const handleInputchange = (e) => {
    if (errorObj.isError) {
      setErrorObj({
        isError: false,
        error: "",
      });
    }
    setSearch((state) => ({
      ...state,
      userName: e.target.value,
    }));
  };
  useEffect(() => {
    if (status === "success" && !isError)
      setSearch((state) => ({
        ...state,
        data: repos.response.data.splice(0, 6),
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
  }, [status, isError, repos, setSearch]);

  useEffect(() => {
    if (status === "error") {
      setSearch((state) => ({
        ...state,
        isLoading: false,
        data: [],
        user: {},
      }));
      setErrorObj({
        isError: true,
        error: error.response.data.message,
      });
    }
  }, [status, error, setErrorObj, setSearch]);

  return (
    <>
    <SearchInput
    {...restProps}
    value={search.userName || ""}
    onChange={(e) => handleInputchange(e)}
    onKeyDown={handleKeyDown}
  />
    <SearchInputIconWrap  onClick={() => handleInputClick()} {...restProps}>
      {children}
    </SearchInputIconWrap>
    </>
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
      {isLoading ? (
        <SearchAnimation>
          <div></div>
          <div></div>
        </SearchAnimation>
      ) : null}
    </div>
  );
};

UserInfo.HanldeError = function UserInfoHanldeError({ ...restProps }) {
  const { errorObj } = useContext(searchContext);

  return errorObj.isError ? (
    <ErrorContainer {...restProps}>
      <span>{errorObj.error}</span>
    </ErrorContainer>
  ) : null;
};

UserInfo.UserDetailsContainer = function UserInfoUserDetailsContainer({
  children,
  ...restProps
}) {
  const { search, setSearch } = useContext(searchContext);
  const counter = useRef(0);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dragCheck, setDragCheck] = useState(false);
  const dragStart = (e, position) => {
    dragItem.current = position;
    setDragCheck(true);
  };
  const { user, data } = search;

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    counter.current++;
  };
  const dragLeave = (e, position) => {
    counter.current--;
    if ((counter.current = 0)) dragOverItem.current = null;
  };
  const drope = () => {
    if (dragOverItem.current != null) {
      const copyListItem = [...search.data];
      const tobeMoved = copyListItem[dragItem.current];
      copyListItem.splice(dragItem.current, 1);
      copyListItem.splice(dragOverItem.current, 0, tobeMoved);
      dragItem.current = null;
      dragOverItem.current = null;
      setSearch((state) => ({
        ...state,
        data: copyListItem,
      }));
      setDragCheck(false);
    }
    setDragCheck(false);
  };
  return (
    <UserDetailsContainer {...restProps}>
      {Object.keys(user).length > 0 && !search.isLoading ? (
        <div className="userDetails__First">
          <div className="imageContainer">
            <img className="imageUser" src={search.user.avatar_url} />
          </div>
          <h2 className="userDetailsFirst__name">{user.login}</h2>
          <div className="userDetailsFirst__row">
            <FaUserFriends size={25} />
            <h2>
              <span>{user.followers}</span> followers.{" "}
              <span>{user.following}</span> following
            </h2>
          </div>
          {user.company ? (
            <div className="userDetailsFirst__row">
              <MdHomeWork size={25} />
              <span>{user.company}</span>
            </div>
          ) : null}

          <div className="userDetailsFirst__row">
            <HiLocationMarker size={25} />
            <span>{user.location}</span>
          </div>
        </div>
      ) : null}
      <div className="userDetails__Second">
        {data &&
          !search.isLoading &&
          data.map((item, index) => (
            <div
              key={index}
              className="userDetailsSecond__card"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragLeave={(e) => dragLeave(e, index)}
              onDragEnd={drope}
              onDragOver={(e) => e.preventDefault()}
              draggable={dragCheck}
            >
              <div className="userDetailsSecond__card_container">
                <MdDragIndicator
                  className="dragbutton"
                  onMouseDown={() => setDragCheck(true)}
                />
                <CardRepoContent>
                  <div className="CardRepoContent__firtRow">
                    <BiBookBookmark className="repo_bok" />
                    <span>
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    </span>
                    <span>public</span>
                  </div>
                  <div className="CardRepoContent__secondRow">
                    <span>{item.description}</span>
                  </div>
                  <div className="CardRepoContent__thirdRow">
                    <div className="test">{item.language}</div>
                    <AiOutlineStar size={20}/>
                  </div>
                </CardRepoContent>
              </div>
            </div>
          ))}
      </div>
    </UserDetailsContainer>
  );
};
