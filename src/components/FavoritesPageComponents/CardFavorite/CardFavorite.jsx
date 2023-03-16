import React from 'react';
import {FavoriteIcon} from "../../FavoriteIcon";
import {ShortCard} from "../../ShortCard";
import {ButtonAddToCart} from "../../Buttons/ButtonAddToCart";
import cn from './CardFavorite.module.scss'

const CardFavorite = ({game}) => {
  const {img,name, slug} = game;
  return (
    <div className={cn['favorite-card']}>
      <ShortCard img={img} name={name} slug={slug}>
        <ButtonAddToCart game={game}/>
      </ShortCard>
      <FavoriteIcon game={game}/>
    </div>
  );
};

export default CardFavorite;