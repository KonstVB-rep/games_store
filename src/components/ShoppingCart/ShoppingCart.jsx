import React, { useState } from "react";
import cn from "./ShoppingCart.module.scss";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/cart/cartSlice";
import { Link } from "react-router-dom";
import { ruble } from "../../constants/currency";
import { createPortal } from "react-dom";
import { CartMenu } from "../CartMenu";

const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);
  const { totalPrice, cartItems } = useSelector((state) => state.cart);

  const isShowHandleCluck = () => setShowCart((p) => !p);

  return (
    <div className={cn.cart} data-count={cartItems.length}>
      {/*<Link to="cart">*/}
      <FaOpencart className={cn.cart__icon} onClick={isShowHandleCluck} />
      {/*</Link>*/}
      <span className={cn["cart__total-price"]}>
        {totalPrice} {ruble}
      </span>
      {showCart && <CartMenu />}
    </div>
  );
};

export default ShoppingCart;
