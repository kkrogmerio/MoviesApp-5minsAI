import { FC } from "react";

import React from "react";
import {Colors}from "../constants";
import { Searchbar } from 'react-native-paper';
interface Props{
    changeTextHandler:(text:string)=>void;
    searchText:string;
}
const SearchBarComponent:FC<Props>= ({searchText,changeTextHandler}) => {
  return (
 
    <Searchbar
    placeholder="Search"
    onChangeText={changeTextHandler}
    value={searchText}
    iconColor={Colors.SECOND}
    style={{backgroundColor:Colors.ACCENT}}
    placeholderTextColor={Colors.SECOND}
    inputStyle={{color:Colors.SECOND,}}
  />
    
  );
};

export default SearchBarComponent;