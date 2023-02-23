import React from "react";
import cn from "./RatingInfo.module.scss";
import {useSelector} from "react-redux";

const RatingInfo = ({ classname = ""}) => {

  const {rating, ratingsCount, released} = useSelector(state => state.singleGame.singleGame);

  return (
    <div className = {`${cn["rating-box"]} ${classname}`}>
      <p>
        <span>Rating</span>
        <span className = {cn["rating-info"]}>{rating}</span>
      </p>
      <p>
        <span>Ratings count</span>
        <span className = {cn["rating-info"]}>{ratingsCount}</span>
      </p>
      <p>
        <span>Release date</span>
        <span> {released}</span>
      </p>
    </div>
  );
};

export default RatingInfo;
