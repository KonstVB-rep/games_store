import React from "react";
import cn from "./ButtonAddRemove.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cartSlice";

const ButtonAddRemove = ({ addProductInCart, delProductInCart, gameId }) => {
  const cart = useSelector(selectCart);
  const countItemInCart = cart.filter((item) => item.id === gameId).length;

  return (
    <div className={cn.wrapper}>
      <button
        className={`${cn.action} ${cn.action_del}`}
        onClick={delProductInCart}
      >
        <span></span>
      </button>
      <span>{countItemInCart}</span>
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
