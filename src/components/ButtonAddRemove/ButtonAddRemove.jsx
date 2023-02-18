import React from "react";
import cn from "./ButtonAddRemove.module.scss";
import { useSelector } from "react-redux";
import { selectAllItems } from "../../store/cart/cartSlice";

const ButtonAddRemove = ({ addProductInCart, delProductInCart, gameId }) => {
  const cartAllItems = useSelector(selectAllItems);
  const countItemInCart = cartAllItems.find((item) => item.id === gameId);

  return (
    <div className={cn.wrapper}>
      <button
        className={`${cn.action} ${cn.action_del}`}
        onClick={delProductInCart}
      >
        <span></span>
      </button>
      <span>{countItemInCart.totalCount}</span>
      <button
        className={`${cn.action} ${cn.action_add}`}
        onClick={addProductInCart}
      >
        +
      </button>
    </div>
  );
};

export default ButtonAddRemove;
