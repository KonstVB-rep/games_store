import React from "react";
import cn from "./ShoppingCart.module.scss";
import { FaOpencart } from "react-icons/fa";

const ShoppingCart = () => {
  return (
    <div className={cn.cart}>
      <FaOpencart className={cn.cart__icon} />
      <span className={cn["cart__total-price"]}>3000 руб.</span>
    </div>
  );
};

export default ShoppingCart;
