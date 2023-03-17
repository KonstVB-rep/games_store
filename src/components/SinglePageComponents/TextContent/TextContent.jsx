import React from "react";
import {Genres} from "../../Genres";
import {RatingInfo} from "../../RatingInfo";
import {DevelopersList} from "../DevelopersList";
import GameBuy from "../../GameBuy";
import cn from "./TextContent.module.scss";

const TextContent = ({game}) => {

  return (
    <div className = {cn.content}>
      <p className = {cn.description}>{game.description ? game.description : 'The description of the game has not been published'}</p>
      <DevelopersList developers={game.developers}/>
      <Genres genres = {game.genres} />
      <RatingInfo classname = {cn.rating_info} rating={game.rating} ratingsCount={game.ratingsCount} released={game.released}/>
      <GameBuy game={game}/>
    </div>
  );
};

export default TextContent;
