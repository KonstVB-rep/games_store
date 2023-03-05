import useSearchGame from "./useSearchGame/useSearchGame";
import {ListFoundGames} from "../../components/SearchPageComponents/ListFoundGames";
import SearchField from "../../components/SearchPageComponents/SearchField/SearchField";
import cn from "./SearchPage.module.scss";
import React from "react";
import {useSelector} from "react-redux";
import {ErrorContainer} from "../../components/ErrorContainer";
import {BackButton} from "../../components/Buttons/BackButton";


const SearchPage = () => {
  const status = useSelector(state => state.search.status)
  const {handleSearch, handleSubmit, searchValue} = useSearchGame();
  return (
    <main className = {cn.main}>
      <BackButton/>
      <ErrorContainer status = {status}>
      <form className = {cn.form} onSubmit = {handleSubmit}>
        <SearchField
          searchValue = {searchValue}
          handleSearch = {handleSearch}
        />
      </form>
        <ListFoundGames />
      </ErrorContainer>
    </main>
  );
};

export default SearchPage;