import React, {memo} from 'react';
import {FavoriteIcon} from "../../FavoriteIcon";
import {ShortCard} from "../../ShortCard";
import {ButtonAddToCart} from "../../Buttons/ButtonAddToCart";
import {useSelector} from "react-redux";
import {selectSingleFavorite} from "../../../store/games/gamesSlice";
import cn from './CardFavorite.module.scss'

const CardFavorite = memo(({id}) => {

  const game = useSelector(selectSingleFavorite(id))

  return (
    <div className={cn['favorite-card']}>
      <ShortCard img={game.img} name={game.name} slug={game.slug}>
        <ButtonAddToCart game={game}/>
      </ShortCard>
      <FavoriteIcon game={game}/>
    </div>
  );
});

export default CardFavorite;