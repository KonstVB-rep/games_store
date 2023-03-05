import React from 'react';
import {ButtonAddRemove} from "../../Buttons/ButtonAddRemove";
import {currency} from "../../../constants/currency";
import {Link} from "react-router-dom";
import cn from './OrderItem.module.scss'

const OrderItem = ({game}) => {

  const price = game.totalCount * game.price;

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

export default OrderItem;