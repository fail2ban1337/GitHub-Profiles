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
  CardRepoContent
} from "./styles";
import { FaUserFriends } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdHomeWork, MdDragIndicator } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import { searchByUserName } from "../../actions/searchAction";
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
  const counter = useRef(0);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dragCheck, setDragCheck] = useState(false);
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(position);
    setDragCheck(true);
  };

  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    counter.current++;
    console.log(position);
  };
  const dragLeave = (e, position) => {
    counter.current--;
    if (counter.current = 0)
    dragOverItem.current = null;
    console.log("dragleave");
  };
  const drope = () => {
    if (dragOverItem.current != null) {
      const copyListItem = [...list];
      const tobeMoved = copyListItem[dragItem.current];
      copyListItem.splice(dragItem.current, 1);
      copyListItem.splice(dragOverItem.current, 0, tobeMoved);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItem);
      setDragCheck(false);
    }
    setDragCheck(false);
  };
  console.log(dragCheck);
  return (
    <UserDetailsContainer {...restProps}>
      <div className="userDetails__First">
        <div className="imageContainer">
          <img className="imageUser" src={search.user.avatar_url} />
        </div>
        <h2 className="userDetailsFirst__name">Fail2ban1337</h2>
        <div className="userDetailsFirst__row">
          <FaUserFriends size={25} />
          <h2>
            <span>8</span> followers. <span>8</span> following
          </h2>
        </div>
        <div className="userDetailsFirst__row">
          <MdHomeWork size={25} />
          <span>Student at 1337 (42 Network)</span>
        </div>
        <div className="userDetailsFirst__row">
          <HiLocationMarker size={25} />
          <span>Khouribga</span>
        </div>
      </div>
      <div className="userDetails__Second">
        {list &&
          list.map((item, index) => (
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
              <div>
              <MdDragIndicator
                className="dragbutton"
                onMouseDown={() => setDragCheck(true)}
              />
              <CardRepoContent>
                <div className="CardRepoContent__firtRow">
                  <BiBookBookmark className="repo_bok"/>
                  <span><a href="#">hypertube_1337</a></span>
                  <span>public</span>
                </div>
                <div className="CardRepoContent__secondRow">
                  <span>A web coding challenge from united remote (List of shops nearby your location sorted by distance)</span>
                </div>
                <div className="CardRepoContent__thirdRow"></div>
                {item}
              </CardRepoContent>
            </div>
            </div>

          ))}
      </div>
    </UserDetailsContainer>
  );
};
