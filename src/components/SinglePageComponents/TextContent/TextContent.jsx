import React from "react";
import GameBuy from "../../GameBuy/GameBuy";
import Genres from "../../Genres/Genres";
import RatingInfo from "../../GameCard/RatingInfo/RatingInfo";
import cn from "./TextContent.module.scss";

const TextContent = ({ game }) => {
  const {
    description,
    genres = [],
    rating,
    ratingsCount,
    released,
  } = game;

  return (
    <div className={cn.content}>
      <p>{description}</p>
      <Genres genres={genres} />
      <RatingInfo
        rating={rating}
        ratingsCount={ratingsCount}
        released={released}
        classname={cn.rating_info}
      />
      <GameBuy game={game} />
    </div>
  );
};

export default TextContent;
