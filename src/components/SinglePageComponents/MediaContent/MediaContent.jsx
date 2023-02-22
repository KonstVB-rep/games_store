import React from "react";
import cn from "./MediaContent.module.scss";

const MediaContent = ({ img }) => {


  return (
    <div className={cn.media}>
      <div className={cn["img-box"]}>
        <img src={img} alt="Poster" />
      </div>
    </div>
  );
};

export default MediaContent;
