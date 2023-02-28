import React from 'react';
import {ButtonAddRemove} from "../Buttons/ButtonAddRemove";
import {currency} from "../../constants/currency";
import {ShortCard} from "../ShortCard";
import cn from './CartItem.module.scss'
import {Link} from "react-router-dom";

const CartItem = ({game}) => {


  const price = game.totalCount * game.price
  return (
    <div className = {cn.card}>
      <div className = {cn.title}>
        <Link to= {`/games/${game.slug}`} title='Go to the game page'>
        {game.name}
        </Link>
      </div>
      <ButtonAddRemove game = {game} />
      <div className = {cn.price}>{price}{currency}</div>
    </div>
  );
};

export default CartItem;