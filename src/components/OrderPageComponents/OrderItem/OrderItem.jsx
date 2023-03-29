import React, {memo} from 'react';
import {ButtonAddRemove} from "../../Buttons/ButtonAddRemove";
import {currency} from "../../../constants/currency";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentItem} from "../../../store/cart/cartSlice";
import cn from './OrderItem.module.scss'


const OrderItem = memo(({id}) => {

  const game = useSelector(selectCurrentItem(id))

  return (
    <div className = {cn.card}>
      <div className = {cn.title}>
        <Link to= {`/games/${game.slug}`} title='Go to the game page'>
        {game.name}
        </Link>
      </div>
      <ButtonAddRemove id={game.id}/>
      <div className = {cn.price}>{game.totalCount * game.price} {currency}</div>
    </div>
  );
});

export default OrderItem;