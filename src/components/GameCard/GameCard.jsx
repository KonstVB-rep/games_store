import React from "react";
import { GamePoster } from "../GameCover";
import { GameBuy } from "../GameBuy";
import { Genres } from "../Genres";
import RatingInfo from "./RatingInfo/RatingInfo";
import cn from "./GameCard.module.scss";
import { useNavigate } from "react-router-dom";

const GameCard = (props) => {
  const navigate = useNavigate();
  const { name, genres, slug, img, price, ...fromRating } = props;

  const handleClick = () => {
    navigate(`/games/${slug}`);
  };
  return (
    <div className={cn["game-card"]} onClick={handleClick}>
      <GamePoster img={img} />
      <div className={cn.details}>
        <p className={cn.title}>{name}</p>
        <Genres genres={genres} />
        <RatingInfo classname={cn.details__secondary} {...fromRating} />
        <GameBuy game={props} />
      </div>
    </div>
  );
};

export default GameCard;
