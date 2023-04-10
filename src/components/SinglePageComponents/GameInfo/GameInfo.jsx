import React, {useEffect} from 'react';
import {useAsyncValue} from "react-router-dom";

import PlatformsLIst from "../PlatformsLIst/PlatformsLIst";
import {Content} from "../Content";
import FavoriteIcon from "../../FavoriteIcon/FavoriteIcon";
import {Poster} from "../Poster";
import cn from "../../../pages/SinglePage/SinglePage.module.scss";


const GameInfo =() => {

  const game = useAsyncValue();


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