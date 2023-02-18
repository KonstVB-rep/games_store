import React, { useEffect } from "react";
import { GameCard } from "../../components/GameCard";
import { fetchGames, selectAllGames } from "../../store/games/gamesSlice";
import { useDispatch, useSelector } from "react-redux";
import cn from "./HomePage.module.scss";
import { selectAllItems } from "../../store/cart/cartSlice";
import Spinner from "../../components/Spinner/Spinner";

const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const { status, error } = useSelector((state) => state.games);
  const format = useSelector(selectAllItems);
  console.log(format);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  if (status === "loading") {
    return (
      <h1>
        <Spinner />
      </h1>
    );
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
