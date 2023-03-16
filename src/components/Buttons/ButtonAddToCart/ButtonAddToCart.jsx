import React from 'react';
import ButtonAddRemove from "../ButtonAddRemove/ButtonAddRemove";
import {Button} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, selectAllItemsCart} from "../../../store/cart/cartSlice";
import cn from "./ButtonAddToCart.module.scss";

const ButtonAddToCart = ({game}) => {
  const dispatch = useDispatch()
  const cart = useSelector(selectAllItemsCart);

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game));
  };

  const isIncludes = cart.some((item) => item.id === game.id);

  return (
    <>
      {!isIncludes ? (
        <Button onClick={addProductInCart} classname={cn.btn_buy}>
          Add to Cart
        </Button>
      ) : (
        <ButtonAddRemove
          game={game}
        />
      )}

    </>
  );
};

export default ButtonAddToCart;