import React from "react";
import {useSelector} from "react-redux";
import {CartMenuContainer} from "../CartMenuContainer";
import ShoppingCartIcons from "../ShoppingCartIcons/ShoppingCartIcons";
import cn from "./ShoppingCart.module.scss";
import {useLocation} from "react-router-dom";



const ShoppingCart = () => {

  const {pathname} = useLocation();

  const {cartList} = useSelector((state) => state.cart);

  if(pathname === '/order') return null;

  return (
    <div className = {cn.cart} data-count = {cartList.length}>
      <ShoppingCartIcons/>
      <CartMenuContainer/>
    </div>
  );
};

export default ShoppingCart;
