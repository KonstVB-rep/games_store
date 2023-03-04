import React, {useEffect, useRef, useState} from 'react';
import {CartMenu} from "../CartMenu";
import cl from "../CartMenu/CartMenu.module.scss";
import cn from "../ShoppingCart/ShoppingCart.module.scss";

const CartMenuContainer = () => {

  const ref = useRef(null)

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const isShowCart = (e) => {
      if (e.target.parentElement.className === cn.btn || e.target.className === cn.btn ) {
        setShowCart(p => !p)
      } else if (!ref.current?.contains(e.target) || e.target.textContent === 'Go to the shopping cart') {
        setShowCart(false)
      }
    }
    document.addEventListener('click', isShowCart)
    return () => document.removeEventListener('click', isShowCart)
  }, [])


  return (
    <CartMenu classname = {`${cl.menu} ${showCart && cl.menu_visible}`} ref = {ref}/>
  );
};

export default CartMenuContainer;