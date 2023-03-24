import React from 'react';
import cn from "../../../pages/SearchPage/SearchPage.module.scss";
import {Link} from "react-router-dom";

const Game = ({id, name}) => {
  return (
    <>
      <li className = {cn['game-item']}>
        <Link to = {`/games/${id}`} className = {cn['game-link']}>{name}</Link>
      </li>
    </>
  );
};

export default Game;