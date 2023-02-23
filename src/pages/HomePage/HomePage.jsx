import React, {forwardRef, useEffect, useRef, useState} from "react";
import {
  clearGamesList,
  loadGames, rememberCountPage, rememberCurrentPage,
  selectStatus,
} from "../../store/games/gamesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useInView} from 'react-intersection-observer';
import Spinner from "../../components/Spinner/Spinner";
import {PATH} from "../../constants/api";
import GamesList from "../../components/HomePageComponents/GamesList/GamesList";
import Skeleton from "../../components/HomePageComponents/Seleton/Skeleton";
import cn from "./HomePage.module.scss";
import {LoadNext} from "../../components/HomePageComponents/LoadNext";

const HomePage = () => {
  // const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.games);



  // const {ref, inView} = useInView({
  //   threshold: 0.1,
  //   rootMargin: '20px',
  //   triggerOnce: true
  // });

  console.log('render')

  //
  // useEffect(() => {
  //   if (inView) {
  //     dispatch(rememberCurrentPage(currentPage + 1))
  //     dispatch(loadGames(PATH.GAMES_URL(currentPage + 1)));
  //   }
  // }, [inView])


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
