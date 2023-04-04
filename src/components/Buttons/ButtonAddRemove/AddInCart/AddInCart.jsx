import {useDispatch} from "react-redux";
import {addProduct} from "../../../../store/cart/cartSlice";
import cn from "../ButtonAddRemove.module.scss";
import React from "react";

const AddInCart = ({game}) => {

  const dispatch = useDispatch()

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game))
  };
  return (
    <button
      className={`${cn.action} ${cn.action_add}`}
      onClick={addProductInCart}
      aria-label='Add one piece'
    >
      +
    </button>
  );
}
export default AddInCart;