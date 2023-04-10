import React, {forwardRef, memo} from "react";
import {useSelector} from "react-redux";

import {GamePoster} from "../GamePoster";
import {Genres} from "../../Genres";
import {RatingInfo} from "../../RatingInfo";
import {FavoriteIcon} from "../../FavoriteIcon";
import PriceGameBox from "../../PriceGameBox";
import {selectGame} from "../../../store/games/gamesSlice";

import cn from "./GameCard.module.scss";


const GameCard = memo(forwardRef(function GameCard({isLast, id}, ref) {

  const game = useSelector(selectGame(id))
  const {name, genres, slug, img, price, ...fromRating} = game;

  return (
    <article className = {cn.card} ref = {isLast ? ref : null}>
      <FavoriteIcon game={game}/>
      <GamePoster img = {img} slug = {slug} />
      <div className = {cn.details}>
        <h2 className = {cn.title}>{name}</h2>
        <Genres genres = {genres} />
        <RatingInfo classname = {cn.details__secondary} {...fromRating} />
        <PriceGameBox game={game}/>
      </div>
    </article>
  );
}));

export default GameCard;
