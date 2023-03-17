import React from "react";
import {useDispatch} from "react-redux";
import {removeProduct} from "../../../../store/cart/cartSlice";
import cn from "../ButtonAddRemove.module.scss";


const DelInCart = ({id}) => {
  console.log(id)
  const dispatch = useDispatch()

  const delProductInCart = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(id));
  }

  return (
    <button
      className={`${cn.action} ${cn.action_del}`}
      onClick={delProductInCart}
    >
      <span></span>
    </button>
  );
};

export default DelInCart;