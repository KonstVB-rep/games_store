import React from "react";
import { useSelector} from "react-redux";
import {selectCurrentItem,} from "../../../store/cart/cartSlice";
import {DelInCart} from "./DelInCart";
import {AddInCart} from "./AddInCart";
import cn from "./ButtonAddRemove.module.scss";

const ButtonAddRemove = ({game}) => {

  const currentGame = useSelector(selectCurrentItem(game.id))

  return (
    <div className = {cn.wrapper}>
      <DelInCart id={game.id}/>
      <span className = {cn.total}>{currentGame.totalCount}</span>
      <AddInCart
        game={game}/>
    </div>
  );
};

export default ButtonAddRemove;