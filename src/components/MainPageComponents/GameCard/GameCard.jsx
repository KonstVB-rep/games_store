import React, { memo} from "react";
import {useSelector} from "react-redux";

import {Genres} from "../../Genres";
import {RatingInfo} from "../../RatingInfo";
import {FavoriteIcon} from "../../FavoriteIcon";
import PriceGameBox from "../../PriceGameBox";
import {selectGame} from "../../../store/games/gamesSlice";

import cn from "./GameCard.module.scss";
import {Link} from "react-router-dom";


const GameCard = memo(({id}) => {

  const game = useSelector(selectGame(id))
  const {name, genres, slug, img, price, ...fromRating} = game;

  return (
    <article className = {cn.card} >
      <FavoriteIcon game={game}/>
      <Link className={cn.wrapper} to= {`/games/${slug}`} title='Go to the game page'>
        <img src={img} alt="poster" className={cn.img} loading='lazy'/>
      </Link>
      <div className = {cn.details}>
        <h2 className = {cn.title}>{name}</h2>
        <Genres genres = {genres} />
        <RatingInfo classname = {cn.details__secondary} {...fromRating} />
        <PriceGameBox game={game}/>
      </div>
    </article>
  );
});

export default GameCard;
