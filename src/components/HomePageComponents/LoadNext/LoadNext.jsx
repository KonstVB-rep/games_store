import {useDispatch, useSelector} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import {loadGames, rememberCurrentPage} from "../../../store/games/gamesSlice";
import {PATH} from "../../../constants/api";
import cn from "./LoadNext.module.scss";
import Skeleton from "../Seleton/Skeleton";

const LoadNext = () => {

  const {status} = useSelector(state => state.games);
  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.games);

  const {ref, inView} = useInView({
    threshold: 0.1,
    rootMargin: '20px',
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      dispatch(rememberCurrentPage(currentPage + 1))
      dispatch(loadGames(PATH.GAMES_URL(currentPage + 1)));
    }
  }, [inView])

  return (
    <>
      {status === "fulfilled" ? <button className = {cn.next} ref = {ref}>Next games loading</button> : status === "loading" && <Skeleton />}
    </>
  )
};
export default LoadNext;