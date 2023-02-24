import React from "react";
import GameBuy from "../../HomePageComponents/GameBuy/GameBuy";
import Genres from "../../Genres/Genres";
import RatingInfo from "../../RatingInfo/RatingInfo";
import cn from "./TextContent.module.scss";
import {DevelopersList} from "./DevelopersList";

const TextContent = ({game}) => {

  return (
    <div className = {cn.content}>
      <p>{game.description ? game.description : 'The description of the game has not been published'}</p>
      <DevelopersList developers={game.developers}/>
      <Genres genres = {game.genres} />
      <RatingInfo classname = {cn.rating_info} rating={game.rating} ratingsCount={game.ratingsCount} released={game.released}/>
      <GameBuy game={game}/>
    </div>
  );
};

export default TextContent;
