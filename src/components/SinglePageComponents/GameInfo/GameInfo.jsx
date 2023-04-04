import React, {useEffect} from 'react';
import {useAsyncValue} from "react-router-dom";
import PlatformsLIst from "../PlatformsLIst/PlatformsLIst";
import {Content} from "../Content";
import FavoriteIcon from "../../FavoriteIcon/FavoriteIcon";
import {Poster} from "../Poster";
import cn from "../../../pages/SinglePage/SinglePage.module.scss";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../../store/cart/cartSlice";


const GameInfo =() => {

  const game = useAsyncValue();

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect')
    if(game){
      dispatch(setCurrentGame(game))
    }
  },[])

  return(
    <article className = {cn.section}>
      <h1 className = {cn.title}>{game.name}</h1>
      <FavoriteIcon game={game}/>
      <Poster img = {game.img} />
      <PlatformsLIst platforms = {game.platforms} reddit = {game.reddit} website = {game.website} />
      <Content game = {game} />
    </article>
  )
}

export default GameInfo;