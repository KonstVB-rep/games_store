import React, {forwardRef} from "react";
import {GamePoster} from "../GamePoster";
import {GameBuy} from "../GameBuy";
import {Genres} from "../../Genres";
import RatingInfo from "../../RatingInfo/RatingInfo";
import cn from "./GameCard.module.scss";
import FavoriteIcon from "../../FavoriteIcon/FavoriteIcon";



const GameCard = forwardRef(function GameCard({isLast, ...game}, ref) {

  const {name, genres, slug, img, price, ...fromRating} = game;


  return (
    <article className = {cn["game-card"]} ref = {isLast ? ref : null}>
      <FavoriteIcon game={game}/>
      <GamePoster img = {img} slug = {slug} />
      <div className = {cn.details}>
        <p className = {cn.title}>{name}</p>
        <Genres genres = {genres} />
        <RatingInfo classname = {cn.details__secondary} {...fromRating} />
        <GameBuy game = {game} />
      </div>
    </article>
  );
});

export default GameCard;
