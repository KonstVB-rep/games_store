import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import {loadGames, rememberCurrentPage} from "../../../../store/games/gamesSlice";
import {PATH} from "../../../../constants/api";
import {useDispatch, useSelector} from "react-redux";


const option = {
  threshold: 0.9,
  rootMargin: '50px',
  triggerOnce: true
}

const useObserver = () => {

  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.games);

  const {ref, inView} = useInView(option);

  useEffect(() => {
    if (inView) {
      dispatch(rememberCurrentPage(currentPage + 1))
      dispatch(loadGames(PATH.GAMES_URL(currentPage + 1)));
    }
  }, [inView])

  return ref;
};

export default useObserver;