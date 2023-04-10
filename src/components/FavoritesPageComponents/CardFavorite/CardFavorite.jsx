import React, {memo} from 'react';
import {useSelector} from "react-redux";

import {FavoriteIcon} from "../../FavoriteIcon";
import {ShortCard} from "../../ShortCard";
import {ButtonAddToCart} from "../../Buttons/ButtonAddToCart";
import {selectSingleFavorite} from "../../../store/games/gamesSlice";

import cn from './CardFavorite.module.scss'

const CardFavorite = memo(({id}) => {

  const game = useSelector(selectSingleFavorite(id))

  return (
    <article className={cn['favorite-card']}>
      <h2 className='visually-hidden'>{game.name}</h2>
      <ShortCard img={game.img} name={game.name} slug={game.slug}>
        <ButtonAddToCart game={game}/>
      </ShortCard>
      <FavoriteIcon game={game}/>
    </article>
  );
});

export default CardFavorite;