import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {Game} from "../Game";
import Spinner from "../../Spinner";
import cn from "../../../pages/SearchPage/SearchPage.module.scss";

const GamesList = memo(() => {

  const {status, gamesList} = useSelector(state => state.search)

  const renderFoundGames = gamesList.map(({name, id}) => <Game key={id} name={name} id={id}/>)

  if (status === 'fulfilled' && !renderFoundGames.length) {
    return <h1>No results found for your query</h1>
  }
  return (
    <section>
      <h1 className='visually-hidden'>List of game titles</h1>
      {status === 'loading' ? <Spinner/> : <ul className = {cn['games-list']}>{renderFoundGames}</ul>}
    </section>
  );
});

export default GamesList;