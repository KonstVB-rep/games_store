import React from 'react';
import {currency} from "../../../constants/currency";
import {FaOpencart} from "react-icons/fa";
import {useSelector} from "react-redux";
import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";
import cn from "../ShoppingCart/ShoppingCart.module.scss";

const ShoppingCartIcons = () => {

  const {totalPrice} = useSelector((state) => state.cart);

  const {cartList} = useSelector((state) => state.cart);


  return (
    <>
      <div className ={cn["cart__info"]}>
        <span className = {cn["total-price"]} data-count = {cartList.length}>
        {totalPrice} {currency}
        </span>
        <button className = {cn['btn-toggle']}>
          <FaOpencart className = {cn['btn-toggle__icon']} />
        </button>
      </div>
      <ThemeSwitcher />
    </>
  );
};

export default ShoppingCartIcons;