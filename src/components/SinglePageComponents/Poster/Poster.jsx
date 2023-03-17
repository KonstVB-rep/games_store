import React from "react";
import cn from "./Poster.module.scss";

const Poster = ({img}) => {

  return (
    <div className={cn.poster}>
      <div className={cn["img-box"]}>
        <img src={img} alt="Poster" />
      </div>
    </div>
  );
};

export default Poster;
