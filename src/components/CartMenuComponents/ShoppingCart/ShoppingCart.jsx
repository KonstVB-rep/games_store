import React from "react";
import {useSelector} from "react-redux";
import {CartMenuContainer} from "../CartMenuContainer";
import ShoppingCartIcons from "../ShoppingCartIcons/ShoppingCartIcons";
import {useLocation} from "react-router-dom";
import cn from "./ShoppingCart.module.scss";



const ShoppingCart = () => {

  const {pathname} = useLocation();

  if(pathname === '/order') return null;

  return (
    <div className = {cn.cart}>
      <ShoppingCartIcons/>
      <CartMenuContainer/>
    </div>
  );
};

export default ShoppingCart;
