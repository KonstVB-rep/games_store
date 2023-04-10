import React, {useEffect, useState} from "react";
import {Link,} from "react-router-dom";

import {CartMenuList} from "../CartMenuList";
import {CartTableFooter} from "../CartTableFooter";
import s from "../ShoppingCart/ShoppingCart.module.scss";

import cn from "./CartMenu.module.scss";

const CartMenu = () => {

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const isShowCart = (e) => {
      if (e.target.className === s['btn-toggle']) {
        setShowCart(p => !p)
      } else if(!e.target.closest(`.${cn.menu}`)){
        setShowCart(false)
      }
    }
    document.documentElement.addEventListener('click', isShowCart, true)
    return () => document.documentElement.removeEventListener('click', isShowCart, true)
  }, [])

  return (
    <div className = {`${cn.menu} ${showCart ?  cn.menu_visible : ''}`}>
      <CartMenuList classname = {cn.orders}/>
      <CartTableFooter classname = {cn.total} />
      <Link to = "order" className = {cn['go-cart']}>
        Go to the cart
      </Link>
    </div>
  )
};

export default CartMenu;
