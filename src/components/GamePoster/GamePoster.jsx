import React from "react";
import cn from "./GamePoster.module.scss";

const GamePoster = ({ img }) => {
  return (
    <div className={cn.wrapper}>
      <img src={img} alt="poster" className={cn.img} />
    </div>
  );
};

export default GamePoster;
