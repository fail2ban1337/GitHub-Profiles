import { click } from "@testing-library/user-event/dist/click";
import React,{createContext, useContext, useState,useEffect} from "react";
import { Container,Card,SearchInputWrapper,SearchInput,SearchInputIconWrap,SearchInputIcon,SearchAnimation } from "./styles";
import {searchByUserName} from "../../actions/searchAction";
import { useQuery } from "react-query";

const searchContext = createContext();
export default function UserInfo({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;

}
UserInfo.Card = function UserInfoCard({children, ...restProps}) {
    const [search, setSearch] = useState({
        isLoading: false,
        data:[]
    })
    return (<searchContext.Provider value={{search, setSearch}}><Card {...restProps}>{children}</Card></searchContext.Provider>)

}

UserInfo.SearchInputWrapper = function({children, ...restProps}) {
    return <SearchInputWrapper {...restProps}>{children}</SearchInputWrapper>
}

UserInfo.SearchInput = function UserInfoSearchInput({children, ...restProps}) {
    const {setSearch,search} = useContext(searchContext);

    return <SearchInput {...restProps} value={search.userName || ''} onChange={(e)=> setSearch(state => ({
        ...state,
        userName: e.target.value,
    }))}/>
}

UserInfo.SearchInputIconWrap = function UserInfoSearchInputIconWrap({children, ...restProps}) {
    const {search,setSearch} = useContext(searchContext);
    const  {data, refetch, status} = useQuery(['repos',search.userName],searchByUserName, {enabled: false});
    console.log(data , status);
    return <SearchInputIconWrap onClick={() => refetch()} {...restProps} >{children}</SearchInputIconWrap>
}
UserInfo.SearchInputIcon = function UserInfoSearchInputIcon({children, ...restProps}) {
    return <SearchInputIcon  {...restProps} />
}

UserInfo.SearchAnimation = function UserInfoSearchAnimation({children,...restProps}) {
    const {search,setSearch} = useContext(searchContext);
    const isLoading = search.isLoading;
    useEffect(() => {
      const timer = setTimeout(() => {
          setSearch(state => ({
              ...state,isLoading:false
          }))
      }, 2000);
      return () => {
        clearTimeout(timer);
      }
    }, [isLoading])
    
    return(<div> {isLoading ? (<SearchAnimation>
        <div></div>
        <div></div>
    </SearchAnimation>) : null}</div>)
}