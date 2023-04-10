import React from 'react';
import {useSelector} from "react-redux";

import {currency} from "../../../constants/currency";
import cn from "../ShoppingCart/ShoppingCart.module.scss";


const TotalPrice = () => {

  const {totalPrice} = useSelector((state) => state.cart);
  const {cartList} = useSelector((state) => state.cart);

  return (
    <span className={cn["total-price"]} data-count={cartList.length}>
      {totalPrice} {currency}
    </span>
  );
}


const ShoppingCartIcons = () => {

  return (
    <>
      <div className = {cn["cart__info"]}>
        <TotalPrice/>
        <button className = {cn['btn-toggle']}>
          <img src='/shopping-cart.svg' className = {cn['btn-toggle__icon']} alt='Show/hide the contents of the cart'/>
        </button>
      </div>
    </>
  );
};

export default ShoppingCartIcons;