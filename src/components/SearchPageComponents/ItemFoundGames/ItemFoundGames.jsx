import React from 'react';
import cn from "../../../pages/SearchPage/SearchPage.module.scss";
import {Link} from "react-router-dom";

const ItemFoundGames = ({id, name}) => {
  return (
    <>
      <li className = {cn['games-item']}><Link
        to = {`/games/${id}`}>{name}</Link></li>
    </>
  );
};

export default ItemFoundGames;