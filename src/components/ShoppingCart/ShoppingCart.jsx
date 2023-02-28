import React from "react";
import {FaOpencart} from "react-icons/fa";
import {useSelector} from "react-redux";
import {currency} from "../../constants/currency";
import {CartMenu} from "../CartMenu";
import cn from "./ShoppingCart.module.scss";


const ShoppingCart = () => {

  const {totalPrice, cartList} = useSelector((state) => state.cart);

  return (
    <div className = {cn.cart} data-count = {cartList.length}>
       <span className = {cn["cart__total-price"]}>
        {totalPrice} {currency}
      </span>
      <FaOpencart className = {cn.cart__icon} />
      <CartMenu />
    </div>
  );
};

export default ShoppingCart;
