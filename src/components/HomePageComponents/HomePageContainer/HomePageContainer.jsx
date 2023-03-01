import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadGames, rememberCountPage} from "../../../store/games/gamesSlice";
import {PATH} from "../../../constants/api";

const HomePageContainer = ({children}) => {

  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.games);

  console.log('render')

  useEffect(() => {
    dispatch(loadGames(PATH.GAMES_URL(currentPage)));
    return () => dispatch(rememberCountPage())
  }, [dispatch]);

  return (
    <main>
      {children}
    </main>
  );
};

export default HomePageContainer;