import React from "react";
import cn from "./ShoppingCart.module.scss";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/cart/cartSlice";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={cn.cart}>
      <Link to="cart">
        <FaOpencart className={cn.cart__icon} />
      </Link>
      <span className={cn["cart__total-price"]}>{totalPrice}</span>
    </div>
  );
};

export default ShoppingCart;
