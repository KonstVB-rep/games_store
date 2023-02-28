import React from 'react';
import {FavoriteIcon} from "../../FavoriteIcon";
import {ShortCard} from "../../ShortCard";
import cn from './CardFavorite.module.scss'
import {ButtonBuy} from "../../Buttons/ButtonBuy";

const CardFavorite = ({game}) => {
  const {img,name} = game;
  return (
    <div className={cn['favorite-card']}>
      <ShortCard img={img} name={name}>
        <ButtonBuy game={game}/>
      </ShortCard>
      <FavoriteIcon game={game}/>

    </div>
  );
};

export default CardFavorite;