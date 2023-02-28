import React from "react";
import cn from "./ButtonAddRemove.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, removeProduct, selectAllItemsCart} from "../../../store/cart/cartSlice";

const ButtonAddRemove = ({ game }) => {

  const dispatch = useDispatch()
  const cartAllItems = useSelector(selectAllItemsCart);
  const countItemInCart = cartAllItems.find((item) => item.id === game.id);

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game));
  };

  const delProductInCart = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(game.id));
  }


  return (
    <div className={cn.wrapper}>
      <button
        className={`${cn.action} ${cn.action_del}`}
        onClick={delProductInCart}
        id='btn_1'
      >
        <span></span>
      </button>
      <span className={cn.total}>{countItemInCart.totalCount}</span>
      <button
        className={`${cn.action} ${cn.action_add}`}
        onClick={addProductInCart}
        id='btn_2'
      >
        +
      </button>
    </div>
  );
};

export default ButtonAddRemove;
