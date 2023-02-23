import React, {useCallback, useEffect, useMemo, useState} from "react";
import debounce from 'lodash.debounce'
import cn from "./SearchPage.module.scss";
import {getData} from "../../utils/getData";
import {PATH} from "../../constants/api";
import {getName} from "../../utils/transformData";
import {Link} from "react-router-dom";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [foundGames, setFoundGames] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')

  const makeRequest =useMemo(() => debounce((query) => {
    setStatus('loading');
    getData(PATH.SEARCH_GAMES(query),getName).then(data => {
      setFoundGames(data)
      setStatus('fulfilled');
    }).catch(err => {
      setError(err);
      setStatus('rejected');
    })
  }, 500),[])
  console.log(foundGames)

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

  const renderFoundGames = foundGames.map(({name,id}) => <li key={id} className = {cn['games-item']}><Link to= {`/games/${id}`}>{name}</Link></li>)

  return (
    <main>
      <form className = {cn.form} onSubmit = {handleSubmit}>
        <label>
          <input className = {cn.input}
                 type = "text"
                 placeholder = "Enter the name of the game"
                 value = {searchValue}
                 onChange = {handleSearch} />
        </label>
        <button type = "submit" className = {cn.btn} />
      </form>
      <div>
        {status === 'loading' ? <h1>Loading ...</h1> : <ul className = {cn['games-list']}>{renderFoundGames}</ul>}
      </div>
    </main>
  )
};

export default SearchPage;
