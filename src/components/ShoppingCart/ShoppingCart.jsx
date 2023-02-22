import React, {useEffect, useState} from "react";
import cn from "./ShoppingCart.module.scss";
import {FaOpencart} from "react-icons/fa";
import {useSelector} from "react-redux";
import {currency} from "../../constants/currency";
import {CartMenu} from "../CartMenu";

const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);

  const idShowCart = (e) => {
    if (e.target.matches(`.${cn.cart__icon}`)) {
      setShowCart(p => !p)
    } else {
      setShowCart(false)
    }
  }

  useEffect(() => {
    document.getElementById("root").addEventListener('click', idShowCart)
    return () => document.getElementById("root").removeEventListener('click', idShowCart)
  }, [])

  const {totalPrice, cartItems} = useSelector((state) => state.cart);

  return (
    <div className = {cn.cart} data-count = {cartItems.length}>
       <span className = {cn["cart__total-price"]}>
        {totalPrice} {currency}
      </span>
      <FaOpencart className = {cn.cart__icon} />
      {showCart && <CartMenu />}
    </div>
  );
};

export default ShoppingCart;
