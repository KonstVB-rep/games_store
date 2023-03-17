import React from "react";
import {useSelector} from "react-redux";
import {ErrorContainer} from "../../components/ErrorContainer";
import {FormSearch} from "../../components/SearchPageComponents/FormSearch";
import {ListFoundGames} from "../../components/SearchPageComponents/ListFoundGames";
import cn from "./SearchPage.module.scss";



const SearchPage = () => {

  const status = useSelector(state => state.search.status)

  return (
    <main className = {cn.main}>
      <ErrorContainer status = {status}>
        <FormSearch/>
        <ListFoundGames />
      </ErrorContainer>
    </main>
  );
};

export default SearchPage;