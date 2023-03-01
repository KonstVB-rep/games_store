import React, {memo} from 'react';
import {useSelector} from "react-redux";
import ItemFoundGames from "../ItemFoundGames/ItemFoundGames";
import Spinner from "../../Spinner/Spinner";
import cn from "../../../pages/SearchPage/SearchPage.module.scss";

const ListFoundGames = memo(() => {

  const {status, gamesList} = useSelector(state => state.search)

  const renderFoundGames = gamesList.map(({name, id}) => <ItemFoundGames key={id} name={name} id={id}/>)

  if (status === 'fulfilled' && !renderFoundGames.length) {
    return <h1>No results found for your query</h1>
  }
  return (
    <div>
      {status === 'loading' ? <Spinner/> : <ul className = {cn['games-list']}>{renderFoundGames}</ul>}
    </div>
  );
});

export default ListFoundGames;