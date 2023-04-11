import React from 'react';
import {Link} from "react-router-dom";

import cn from './ShortCard.module.scss'

const ShortCard = ({name,slug, img, children}) => {
  return (
    <div className={cn.card}>
      <div className={cn.card__img}>
        <Link to= {`/games/${slug}`} title='Go to the game page'>
          {img ? <img src = {img} alt = "Poster" className={cn.poster}/> : <img src = '/not-image.jpg' alt = "Not found" />}
        </Link>
      </div>
      <p className={cn.card__title}>{name}</p>
      {children}
    </div>
  );
};

export default ShortCard;