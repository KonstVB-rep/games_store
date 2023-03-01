import React from 'react';
import cn from './ShortCard.module.scss'
import {Link} from "react-router-dom";

const ShortCard = ({name,slug, img, children}) => {
  return (
    <div className={cn.card}>
      <div className={cn.card__img}>
        <Link to= {`/games/${slug}`} title='Go to the game page'>
          <img src = {img} alt = "" />
        </Link>
      </div>
      <p className={cn.card__title}>{name}</p>
      {children}
    </div>
  );
};

export default ShortCard;