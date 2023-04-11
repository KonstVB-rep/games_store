import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {addProduct, removeProduct, selectCurrentItem,} from "store/cart/cartSlice";

import cn from "./ButtonAddRemove.module.scss";

const ButtonAddRemove = ({game}) => {

  const currentGame = useSelector(selectCurrentItem(game.id))
  const dispatch = useDispatch();

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game))
  };

  const delProductInCart = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(game.id));
  }

  return (
    <div className = {cn.wrapper}>
      <button className = {`${cn.action} ${cn.action_del}`} onClick = {delProductInCart}
              aria-label = "delete one piece">
        <span></span>
      </button>
      <span className = {cn.total}>{currentGame.totalCount}</span>
      <button className = {`${cn.action} ${cn.action_add}`} onClick = {addProductInCart} aria-label = "Add one piece">
        +
      </button>
    </div>
  );
};

export default ButtonAddRemove;