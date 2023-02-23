import React from "react";
import GameBuy from "../../HomePageComponents/GameBuy/GameBuy";
import Genres from "../../Genres/Genres";
import RatingInfo from "../../RatingInfo/RatingInfo";
import cn from "./TextContent.module.scss";
import {DevelopersList} from "./DevelopersList";
import {useSelector} from "react-redux";

const TextContent = () => {
  const {description, genres = [],} = useSelector(state => state.singleGame.singleGame);


  return (
    <div className = {cn.content}>
      <p>{description ? description : 'The description of the game has not been published'}</p>
      <DevelopersList />
      <Genres genres = {genres} />
      <RatingInfo classname = {cn.rating_info} />
      <GameBuy />
    </div>
  );
};

export default TextContent;
