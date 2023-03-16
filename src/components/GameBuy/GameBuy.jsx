import React from "react";
import {ButtonAddToCart} from "../Buttons/ButtonAddToCart";
import {currency} from "../../constants/currency";
import cn from "./GameBuy.module.scss";

const GameBuy = ({game}) => {

  return (
    <div className = {cn.purchase}>
      <span className = {cn.price}>
        {game.price} {currency}
      </span>
      <ButtonAddToCart game = {game} />
    </div>
  );
};

export default GameBuy;
