import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadGames, rememberCountPage} from "../../../store/games/gamesSlice";
import {PATH} from "../../../constants/api";
import {ErrorContainer} from "../../ErrorContainer";
import {MotionMain} from "../../MotionMain";
import cn from "../../../pages/SearchPage/SearchPage.module.scss";


const HomePageContainer = ({children}) => {

  const dispatch = useDispatch();
  const {currentPage, countPage} = useSelector(state => state.games);

  useEffect(() => {

    if(currentPage !== countPage){
      dispatch(loadGames(PATH.GAMES_URL(currentPage)));
    }
    return () => dispatch(rememberCountPage())
  }, []);


  return (
    <MotionMain className = {cn.main}>
      <ErrorContainer>
        {children}
      </ErrorContainer>
    </MotionMain>
  );
};

export default HomePageContainer;