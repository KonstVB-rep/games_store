import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  addProduct,
  removeProduct,
  selectAllItems,
} from "../../../store/cart/cartSlice";
import {ButtonBuy} from "../../Buttons/ButtonBuy";
import {currency} from "../../../constants/currency";
import cn from "./GameBuy.module.scss";

const GameBuy = ({game}) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllItems);

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game));
  };

  const delProductInCart = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(game.id));
  }
  const isIncludes = cart.some((item) => item.id === game.id);

  return (
    <div className = {cn.purchase}>
      <span className = {cn.price}>
        {game.price} {currency}
      </span>
      <ButtonBuy isIncludes = {isIncludes}
                 addProductInCart = {addProductInCart}
                 delProductInCart = {delProductInCart}
                 gameId = {game.id} />
    </div>
  );
};

export default GameBuy;
