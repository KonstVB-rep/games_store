import React from "react";
import {Genres} from "../../Genres";
import {RatingInfo} from "../../RatingInfo";
import {DevelopersList} from "../DevelopersList";
import PriceGameBox from "../../PriceGameBox";
import cn from "./Content.module.scss";

const Content = ({game}) => {

  return (
    <div className = {cn.content}>
      <p className = {cn.description}>{game.description ? game.description : 'The description of the game has not been published'}</p>
      <DevelopersList developers={game.developers}/>
      <Genres genres = {game.genres} />
      <RatingInfo classname = {cn.rating_info} rating={game.rating} ratingsCount={game.ratingsCount} released={game.released}/>
      <PriceGameBox id={game.id} price={game.price}/>
    </div>
  );
};

export default Content;
