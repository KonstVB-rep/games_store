import React from "react";
import cn from "./RatingInfo.module.scss";

const RatingInfo = ({ rating, ratingsCount, released, classname = "" }) => {
  return (
    <div className={`${cn["rating-box"]} ${classname}`}>
      <p>
        <span>Rating:</span>
        <span className={cn["rating-info"]}>{rating}</span>
      </p>
      <p>
        <span>Ratings count:</span>
        <span className={cn["rating-info"]}>{ratingsCount}</span>
      </p>
      <p>
        <span>Release date:</span>
        <span>{released}</span>
      </p>
    </div>
  );
};

export default RatingInfo;
