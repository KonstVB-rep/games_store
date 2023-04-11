import React from "react";

import NOT_IMAGE from 'assets/not-image.jpg'

import cn from "./Poster.module.scss";

const Poster = ({img}) => {

  return (
    <div className={cn.poster}>
      <div className={cn["img-box"]}>
        {img ? <img src = {img} alt = "Poster" className={cn.poster}/> : <img src = {NOT_IMAGE} alt = "Not found" />}
      </div>
    </div>
  );
};

export default Poster;
