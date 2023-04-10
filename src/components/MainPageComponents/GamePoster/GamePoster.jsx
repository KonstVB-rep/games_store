import React from "react";
import {Link} from "react-router-dom";

import cn from "./GamePoster.module.scss";

const GamePoster = ({ img,slug }) => {
  return (
    <Link className={cn.wrapper} to= {`/games/${slug}`} title='Go to the game page'>
      <img src={img} alt="poster" className={cn.img} />
    </Link>
  );
};

export default GamePoster;
