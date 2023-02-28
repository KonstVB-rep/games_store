import React from "react";
import { GameCard } from "../GameCard";
import {useSelector} from "react-redux";
import { selectAllGames} from "../../../store/games/gamesSlice";
import useObserver from "./useObserver/useObserver";
import cn from "./GamesList.module.scss";

const GamesList = () => {
  const games = useSelector(selectAllGames);
  const ref = useObserver()

  return (
    <div className = {cn.content}>
      {games.map((game, index) => (
        <GameCard key={game.id} {...game} isLast={index === games.length - 1} ref={ref}/>
      ))}
    </div>
  );
};

export default GamesList;
