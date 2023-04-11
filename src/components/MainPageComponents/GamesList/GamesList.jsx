import React from "react";
import { useSelector} from "react-redux";

import { GameCard } from "../GameCard";
import {selectAllGames} from "../../../store/games/gamesSlice";



const GamesList = () => {

  const games = useSelector(selectAllGames);

  return (
    <>
      <h1 className='visually-hidden'>list of game cards</h1>
      {games.map(({id}) => (
        <GameCard key={id} id={id} />
      ))}
    </>
  );
};

export default GamesList;
