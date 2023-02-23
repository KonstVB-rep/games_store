import React, {memo} from "react";
import { GameCard } from "../GameCard";
import { useSelector } from "react-redux";
import {selectAllGames, selectStatus} from "../../../store/games/gamesSlice";
import cn from "./GamesList.module.scss";

const GamesList = memo(() => {
  const games = useSelector(selectAllGames);

  return (
    <div className = {cn.content}>
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
});

export default GamesList;
