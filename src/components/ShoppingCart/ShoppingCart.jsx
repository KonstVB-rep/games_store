import React, { useState } from "react";
import cn from "./ShoppingCart.module.scss";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { currency } from "../../constants/currency";
import { CartMenu } from "../CartMenu";

const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);
  const { totalPrice, cartItems } = useSelector((state) => state.cart);

  const isShowHandleClick = () => setShowCart((p) => !p);

  return (
    <div className={cn.cart} data-count={cartItems.length}>
      {/*<Link to="cart">*/}
      <FaOpencart className={cn.cart__icon} onClick={isShowHandleClick} />
      {/*</Link>*/}
      <span className={cn["cart__total-price"]}>
        {totalPrice} {currency}
      </span>
      {showCart && <CartMenu />}
    </div>
  );
};

export default ShoppingCart;
