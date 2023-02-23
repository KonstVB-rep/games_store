import React from "react";
import cn from "./MediaContent.module.scss";
import {useSelector} from "react-redux";

const MediaContent = () => {
  const {img} = useSelector(state => state.singleGame.singleGame);
  return (
    <div className={cn.media}>
      <div className={cn["img-box"]}>
        <img src={img} alt="Poster" />
      </div>
    </div>
  );
};

export default MediaContent;
