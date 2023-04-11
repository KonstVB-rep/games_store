import React from "react";
import {useSelector} from "react-redux";

import {FormSearch} from "../../components/SearchPageComponents/FormSearch";
import {GamesList} from "../../components/SearchPageComponents/GamesList";
import {MotionMain} from "../../components/MotionMain";

import cn from "./SearchPage.module.scss";
import ErrorPage from "../ErrorPage";


const SearchPage = () => {

  const status = useSelector(state => state.search.status)

  if(status === 'rejected') return <ErrorPage/>

  return (
    <MotionMain classname = {cn.main} >
        <FormSearch/>
        <GamesList />
    </MotionMain>
  );
};

export default SearchPage;