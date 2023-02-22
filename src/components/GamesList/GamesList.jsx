import React from "react";
import { GameCard } from "../GameCard";
import { useSelector } from "react-redux";
import {selectAllGames, selectStatus} from "../../store/games/gamesSlice";

const GamesList = () => {
  const games = useSelector(selectAllGames);

  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </>
  );
};

export default GamesList;
