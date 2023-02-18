import React, { useEffect, useState } from "react";
import { GAMES_URL } from "../../api";
import { GameCard } from "../../components/GameCard";
import {
  fetchGames,
  loadGames,
  selectAllGames,
} from "../../store/games/gamesSlice";
import { useDispatch, useSelector } from "react-redux";
import cn from "./HomePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const { status, error } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "error") {
    return <h1>Error...</h1>;
  }

  return (
    <main className={cn.content}>
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </main>
  );
};

export default HomePage;
