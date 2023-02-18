import React from "react";
import cn from "./GameCard.module.scss";
import { GamePoster } from "../GameCover";
import { GameBuy } from "../GameBuy";
import { Genres } from "../Genres";

const GameCard = (props) => {
  const { name, genres, img, price, rating, ratingsCount, released } = props;
  return (
    <div className={cn["game-card"]} onClick={() => {}}>
      <GamePoster img={img} />
      <div className={cn.details}>
        <p className={cn.title}>{name}</p>
        <Genres genres={genres} />
        <div className={cn.details__secondary}>
          <p>
            <span>Rating</span>
            <span>{rating}</span>
          </p>
          <p>
            <span>Ratings count:</span>
            <span>{ratingsCount}</span>
          </p>
          <p>
            <span>Release date:</span>
            <span>{released}</span>
          </p>
        </div>
        <GameBuy game={props} />
      </div>
    </div>
  );
};

export default GameCard;
