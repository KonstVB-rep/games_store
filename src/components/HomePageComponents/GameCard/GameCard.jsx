import React, {forwardRef, memo} from "react";
import {GamePoster} from "../GamePoster";
import {Genres} from "../../Genres";
import {RatingInfo} from "../../RatingInfo";
import {FavoriteIcon} from "../../FavoriteIcon";
import GameBuy from "../../GameBuy";
import cn from "./GameCard.module.scss";



const GameCard = memo(forwardRef(function GameCard({isLast, ...game}, ref) {

  const {name,id, genres, slug, img, price, ...fromRating} = game;


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
}));

export default GameCard;
