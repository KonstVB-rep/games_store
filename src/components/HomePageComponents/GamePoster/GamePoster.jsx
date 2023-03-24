import React from "react";
import cn from "./GamePoster.module.scss";
import {Link} from "react-router-dom";

const GamePoster = ({ img,slug }) => {
  return (
    <Link className={cn.wrapper} to= {`/games/${slug}`} title='Go to the game page'>
      <img src={img} alt="poster" className={cn.img} />
    </Link>
  );
};

export default GamePoster;
