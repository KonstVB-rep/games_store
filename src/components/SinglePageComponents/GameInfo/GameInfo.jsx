import React from 'react';
import {useAsyncValue} from "react-router-dom";
import cn from "../../../pages/SinglePage/SinglePage.module.scss";
import {MediaContent} from "../MediaContent";
import PlatformsLIst from "../PlatformsLIst/PlatformsLIst";
import {TextContent} from "../TextContent";
import FavoriteIcon from "../../FavoriteIcon/FavoriteIcon";

const GameInfo =() => {
  const game = useAsyncValue();
  return(
    <div className = {cn.wrapper}>
      <FavoriteIcon game={game}/>
      <h1 className = {cn.title}>{game.name}</h1>
      <MediaContent img = {game.img} />
      <PlatformsLIst platforms = {game.platforms} reddit = {game.reddit} website = {game.website} />
      <TextContent game = {game} />
    </div>
  )
}

export default GameInfo;