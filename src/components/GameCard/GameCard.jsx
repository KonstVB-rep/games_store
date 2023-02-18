import React from "react";
import cn from "./GameCard.module.scss";
import { GamePoster } from "../GameCover";

const GameCard = ({
  name,
  genres,
  img,
  price,
  rating,
  ratingsCount,
  released,
  updated,
}) => {
  console.log(genres);
  return (
    <div className={cn["game-card"]} onClick={() => {}}>
      <GamePoster img={img} />
      <div className={cn.details}>
        <span className={cn.title}>{name}</span>
        <div className={cn.genres__list}>
          {genres.length &&
            genres.map((genre) => (
              <span className={cn.genre} key={genre.id}>
                {genre.name}
              </span>
            ))}
        </div>
        <p>Rating: {rating} from 5</p>
        <p>Ratings count: {ratingsCount}</p>
        <p>Release date: {released}</p>
        <div className={cn.purchase}>
          {/*<GameBuy game={game} />*/}
          {/*{price}*/}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
