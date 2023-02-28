import React from "react";
import cn from "./RatingInfo.module.scss";
import {useSelector} from "react-redux";

const RatingInfo = ({rating, ratingsCount, released, classname = ""}) => {

  return (
    <div className = {`${cn["rating-box"]} ${classname}`}>
      <p>
        <span className = {cn["title-info"]}>Rating</span>
        <span className = {cn["rating-info"]}>{rating}</span>
      </p>
      <p>
        <span className = {cn["title-info"]}>Ratings count</span>
        <span className = {cn["rating-info"]}>{ratingsCount}</span>
      </p>
      <p>
        <span className = {cn["title-info"]}>Release date</span>
        <span> {released}</span>
      </p>
    </div>
  );
};

export default RatingInfo;
