import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadGames, rememberCountPage} from "../../../store/games/gamesSlice";
import {PATH} from "../../../constants/api";
import {ErrorContainer} from "../../ErrorContainer";



const HomePageContainer = ({children}) => {

  const dispatch = useDispatch();
  const {currentPage,status} = useSelector(state => state.games);

  console.log('render')

  useEffect(() => {
    dispatch(loadGames(PATH.GAMES_URL(currentPage)));
    return () => dispatch(rememberCountPage())
  }, [dispatch]);


  return (
    <main>
      <ErrorContainer status={status}>
        {children}
      </ErrorContainer>
    </main>
  );
};

export default HomePageContainer;