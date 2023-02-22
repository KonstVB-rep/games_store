import React from "react";
import { GamePoster } from "../GamePoster";
import { GameBuy } from "../GameBuy";
import { Genres } from "../Genres";
import RatingInfo from "./RatingInfo/RatingInfo";
import cn from "./GameCard.module.scss";
import { useNavigate } from "react-router-dom";

const GameCard = (game) => {

  const { name, genres, slug, img, price, ...fromRating } = game;
  return (
    <div className={cn["game-card"]}>
      <GamePoster img={img} slug={slug}/>
      <div className={cn.details}>
        <p className={cn.title}>{name}</p>
        <Genres genres={genres} />
        <RatingInfo classname={cn.details__secondary} {...fromRating} />
        <GameBuy game={game} />
      </div>
    </div>
  );
};

export default GameCard;
