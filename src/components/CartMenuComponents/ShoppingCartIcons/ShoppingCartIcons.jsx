import React from 'react';
import {currency} from "../../../constants/currency";
import {FaOpencart} from "react-icons/fa";
import {useSelector} from "react-redux";
import cn from "../ShoppingCart/ShoppingCart.module.scss";

const ShoppingCartIcons = () => {

  const {totalPrice} = useSelector((state) => state.cart);

  return (
    <>
      <span className = {cn["cart__total-price"]}>
        {totalPrice} {currency}
      </span>
      <FaOpencart className = {cn.cart__icon} tabIndex = "0" role = "button" />
    </>
  );
};

export default ShoppingCartIcons;