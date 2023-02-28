import React, {useEffect} from "react";
import {
  loadGames, rememberCountPage,
} from "../../store/games/gamesSlice";
import {useDispatch, useSelector} from "react-redux";

import {PATH} from "../../constants/api";
import GamesList from "../../components/HomePageComponents/GamesList/GamesList";
import {LoadNext} from "../../components/HomePageComponents/LoadNext";

const HomePage = () => {

  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.games);

  console.log('render')

  useEffect(() => {
    dispatch(loadGames(PATH.GAMES_URL(currentPage)));
    return () => dispatch(rememberCountPage())
  }, []);


  return (
    <main>
      <GamesList />
      <LoadNext />
    </main>
  );
};

export default HomePage;
