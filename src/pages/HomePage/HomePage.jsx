import React, { useEffect } from "react";
import { GameCard } from "../../components/GameCard";
import { loadGames, selectAllGames } from "../../store/games/gamesSlice";
import { useDispatch, useSelector } from "react-redux";
import cn from "./HomePage.module.scss";
import Spinner from "../../components/Spinner/Spinner";
import { PATH } from "../../constants/api";

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const { status } = useSelector((state) => state.games);

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
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </main>
  );
};

export default HomePage;
