import React from 'react';
import ButtonAddRemove from "../ButtonAddRemove/ButtonAddRemove";
import {Button} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, selectAllItemsCart, selectCurrentItem, selectItemCart} from "../../../store/cart/cartSlice";
import cn from "./ButtonAddToCart.module.scss";

const ButtonAddToCart = ({game}) => {
  const dispatch = useDispatch()
  const currentItem = useSelector(selectCurrentItem(game.id));

  const addProductInCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct(game));
  };


  return (
    <>
      {!!!currentItem ? (
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