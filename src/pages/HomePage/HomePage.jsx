import React, { useEffect } from "react";
import { GameCard } from "../../components/GameCard";
import {
  loadGames,
  selectAllGames,
  selectStatus,
} from "../../store/games/gamesSlice";
import { useDispatch, useSelector } from "react-redux";
import cn from "./HomePage.module.scss";
import Spinner from "../../components/Spinner/Spinner";
import { PATH } from "../../constants/api";
import GamesList from "../../components/GamesList/GamesList";

const HomePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(loadGames(PATH.GAMES_URL));
  }, []);

  if (status === "loading") {
    return (
      <h1>
        <Spinner />
      </h1>
    );
  }

  return (
    <main className={cn.content}>
      {/*{games.map((game) => (*/}
      {/*  <GameCard key={game.id} {...game} />*/}
      {/*))}*/}
      <GamesList />
    </main>
  );
};

export default HomePage;
