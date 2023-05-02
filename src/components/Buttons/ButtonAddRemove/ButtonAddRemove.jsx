import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {addProduct, removeProduct, selectCurrentItem,} from "store/cart/cartSlice";

import cn from "./ButtonAddRemove.module.scss";

const ButtonAddRemove = ({game}) => {

  const currentGame = useSelector(selectCurrentItem(game.id))
  const dispatch = useDispatch();

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game))
  };

  const delProductInCart = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(game.id));
  }

  return (
    <div className = {cn.wrapper}>
      <button className = {`${cn.action} ${cn.action_del}`} onClick = {delProductInCart}
              aria-label = "delete one piece">
        <span></span>
      </button>
      <span className = {cn.total}>{currentGame.totalCount}</span>
      <button className = {`${cn.action} ${cn.action_add}`} onClick = {addProductInCart} aria-label = "Add one piece">
        <span className ={cn.plus}>
          <svg version = "1.1" id = "Capa_1" xmlns = "http://www.w3.org/2000/svg" x = "0px" y = "0px" fill = "white"
               viewBox = "0 0 286.376 286.376">
            <g id = "Add">
              <path d = "M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898
          s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39
          c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898
          C286.376,133.303,278.362,125.29,268.477,125.29z" />
            </g>
          </svg>
       </span>
      </button>
    </div>
  );
};

export default ButtonAddRemove;