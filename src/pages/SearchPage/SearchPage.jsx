import React from "react";
import {useSelector} from "react-redux";
import {ErrorContainer} from "../../components/ErrorContainer";
import {FormSearch} from "../../components/SearchPageComponents/FormSearch";
import {GamesList} from "../../components/SearchPageComponents/GamesList";
import {MotionMain} from "../../components/MotionMain";
import cn from "./SearchPage.module.scss";


const SearchPage = () => {

  const status = useSelector(state => state.search.status)

  return (
    <MotionMain classname = {cn.main} >
      <ErrorContainer status = {status}>
        <FormSearch/>
        <GamesList />
      </ErrorContainer>
    </MotionMain>
  );
};

export default SearchPage;