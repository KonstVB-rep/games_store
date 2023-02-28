import React from 'react';
import cn from './ShortCard.module.scss'

const ShortCard = ({name, img, children}) => {
  return (
    <div className={cn.card}>
      <div className={cn.card__img}>
        <img src = {img} alt = "" />
      </div>
      <p className={cn.card__title}>{name}</p>
      {children}
    </div>
  );
};

export default ShortCard;