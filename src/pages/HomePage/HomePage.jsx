import React, {useCallback, useEffect, useState} from "react";
import {
  loadGames, selectAllGames,
  selectStatus,
} from "../../store/games/gamesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useInView} from 'react-intersection-observer';
import Spinner from "../../components/Spinner/Spinner";
import {PATH} from "../../constants/api";
import GamesList from "../../components/GamesList/GamesList";
import Skeleton from "../../components/Seleton/Skeleton";
import cn from "./HomePage.module.scss";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const {ref, inView, entry} = useInView({
    threshold: 0.1,
    rootMargin: '20px',
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage(p => p + 1)
    }
  }, [inView])

  useEffect(() => {
    dispatch(loadGames(PATH.GAMES_URL(currentPage)));
  }, [dispatch, currentPage]);


  return (
    <main>
      <div className = {cn.content}>
        {status === "loading" && <Skeleton /> }
          <GamesList />
      </div>
      {status === "fulfilled" ? <button className = {cn.next} ref={ref} >Next games loading</button> : <h1>Loading...</h1>}
    </main>
  );
};

export default HomePage;
