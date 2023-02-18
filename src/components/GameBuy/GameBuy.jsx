import React from "react";
import { Button } from "../Button";
import cn from "./GameBuy.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cart/cartSlice";

const GameBuy = ({ games }) => {
  const dispatch = useDispatch();
  const addProductInCart = () => {
    dispatch(addProduct(games));
  };
  return (
    <div className={cn.purchase}>
      <span className="price">{games.price} руб.</span>
      <Button onClick={addProductInCart}>
        В корзину
        {/*  type={isItemInCart ? "secondary" : "primary" }*/}
        {/*  onClick={handleClick}*/}
        {/*>*/}
        {/*  {isItemInCart ? "Убрать из корзины" : "В Корзину"}*/}
      </Button>
    </div>
  );
};

export default GameBuy;
