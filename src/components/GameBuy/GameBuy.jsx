import React from "react";
import { Button } from "../Button";
import cn from "./GameBuy.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  selectAllItems,
} from "../../store/cart/cartSlice";
import { ruble } from "../../constants/currency";
import ButtonAddRemove from "../ButtonAddRemove/ButtonAddRemove";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllItems);

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game));
  };

  const delProductInCart = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(game.id));
  };

  const isIncludes = cart.some((item) => item.id === game.id);

  return (
    <div className={cn.purchase}>
      <span>
        {game.price} {ruble}
      </span>
      {!isIncludes ? (
        <Button onClick={addProductInCart}>В корзину</Button>
      ) : (
        <ButtonAddRemove
          gameId={game.id}
          addProductInCart={addProductInCart}
          delProductInCart={delProductInCart}
        />
      )}
    </div>
  );
};

export default GameBuy;
