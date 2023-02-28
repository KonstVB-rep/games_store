import React, {useState} from 'react';
import {getData} from "../../../utils/getData";
import {PATH} from "../../../constants/api";
import {getName} from "../../../utils/transformData";
import {useDispatch} from "react-redux";
import {loadSearchGames} from "../../../store/search/searchSlice";


const useSearchGame = () => {
    const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');

  const makeRequest = (query) => {
    dispatch(loadSearchGames(PATH.SEARCH_GAMES(query)))
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    if(searchValue.trim().length){
      makeRequest(searchValue);
      setSearchValue('')
    }
  }

  return {
    handleSearch,
    handleSubmit,
    searchValue,
    // foundGames,
    // status,
    // error
  };
};

export default useSearchGame;