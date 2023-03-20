import React from 'react';
import {currency} from "../../../constants/currency";
import {FaOpencart} from "react-icons/fa";
import {useSelector} from "react-redux";
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
          <FaOpencart className = {cn['btn-toggle__icon']} />
        </button>
      </div>
    </>
  );
};

export default ShoppingCartIcons;