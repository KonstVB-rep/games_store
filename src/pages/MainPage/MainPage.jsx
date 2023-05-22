import React, {useEffect} from "react";

import {GamesList} from "../../components/MainPageComponents/GamesList";
import Skeleton from "../../components/MainPageComponents/Skeleton/Skeleton";
import cn from "./MainPage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {loadGames, rememberCountPage} from "store/games/gamesSlice";
import {PATH} from "constants/api";
import {MotionMain} from "components/MotionMain";
import useObserver from "hooks/useObserver";
import ErrorPage from "../ErrorPage";


const MainPage = () => {

  const dispatch = useDispatch();
  
  const {currentPage, countPage,status} = useSelector(state => state.games);

  const ref = useObserver()

  useEffect(() => {
    if (currentPage !== countPage) {
      dispatch(loadGames(PATH.GAMES_URL(currentPage)));
    }
    return () => dispatch(rememberCountPage())
  }, []);

  if(status === 'rejected') return <ErrorPage/>

  return (
    <>
      <MotionMain classname = {cn.main}>
        <GamesList />
        <Skeleton />
        <span ref={ref}></span>
      </MotionMain>
    </>
  );
};

export default MainPage;
