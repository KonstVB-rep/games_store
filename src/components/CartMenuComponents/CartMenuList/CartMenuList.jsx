import React from 'react';
import CartMenuItem from "../CartMenuItem/CartMenuItem";
import {useSelector} from "react-redux";
import {selectAllItemsCart} from "../../../store/cart/cartSlice";
import cl from "../CartMenu/CartMenu.module.scss";

const CartMenuList = ({classname, children}) => {

  const allItemsInCart = useSelector(selectAllItemsCart);

  const renderCartItems = allItemsInCart.map((item) => (
    <CartMenuItem key = {item.id} {...item} classname = {cl.grid} />
  ))

  return (
    <div className = {classname}>
      {children}
      {renderCartItems}
    </div>
  );
};

export default CartMenuList;