import React from "react";
import {useSelector} from "react-redux";

import { GameCard } from "../GameCard";
import { selectAllGames} from "../../../store/games/gamesSlice";

import useObserver from "./useObserver/useObserver";
import cn from "./GamesList.module.scss";

const GamesList = () => {
  const games = useSelector(selectAllGames);
  const ref = useObserver()

  return (
    <section className = {cn.content}>
      <h1 className='visually-hidden'>list of game cards</h1>
      {games.map(({id}, index) => (
        <GameCard key={id} id={id} isLast={index === games.length - 1} ref={ref}/>
      ))}
    </section>
  );
};

export default GamesList;
