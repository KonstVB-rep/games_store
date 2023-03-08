import React, {useEffect, useRef, useState} from 'react';
import {CartMenu} from "../CartMenu";
import cl from "../CartMenu/CartMenu.module.scss";
import cn from "../ShoppingCart/ShoppingCart.module.scss";

const CartMenuContainer = () => {

  const ref = useRef(null)

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const isShowCart = (e) => {
      if (e.target.className === cn['btn-toggle']) {
        setShowCart(p => !p)
      } else if (!ref.current?.contains(e.target)) {
        setShowCart(false)
      }
    }
    window.addEventListener('click', isShowCart)
    return () => window.removeEventListener('click', isShowCart)
  }, [])


  return (
    <CartMenu classname = {`${cl.menu} ${showCart ?  cl.menu_visible : ''}`} ref = {ref} setShowCart={setShowCart}/>
  );
};

export default CartMenuContainer;