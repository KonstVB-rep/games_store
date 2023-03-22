import React from "react";
import cn from "./Genre.module.scss";

const Genres = ({ genres = [] }) => {
  return (
    <div className={cn.genres}>
      {genres.length ?
        genres.map((genre) => (
          <span className={cn.genre} key={genre.id}>
            {genre.name}
          </span>
        )) :  null}
    </div>
  );
};

export default Genres;
