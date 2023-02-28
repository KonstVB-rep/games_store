import React, {memo} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import cn from "../../../pages/SearchPage/SearchPage.module.scss";

const SearchItem = memo(() => {

  const {status, gamesList} = useSelector(state => state.search)
  const renderFoundGames = gamesList.map(({name, id}) => <li key = {id} className = {cn['games-item']}><Link
    to = {`/games/${id}`}>{name}</Link></li>)

  if (status === 'fulfilled' && !renderFoundGames.length) {
    return <h1>No results found for your query</h1>
  }
  return (
    <div>
      {status === 'loading' ? <h1>Loading ...</h1> : <ul className = {cn['games-list']}>{renderFoundGames}</ul>}
    </div>
  );
});

export default SearchItem;