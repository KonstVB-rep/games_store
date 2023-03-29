import {useDispatch, useSelector} from "react-redux";
import {addProduct, selectCurrentItem} from "../../../../store/cart/cartSlice";
import cn from "../ButtonAddRemove.module.scss";
import React from "react";

const AddInCart = ({id}) => {

  const dispatch = useDispatch()

  const currentGame = useSelector(selectCurrentItem(id))

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(currentGame));
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