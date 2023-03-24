import React from "react";
import {ButtonAddToCart} from "../Buttons/ButtonAddToCart";
import {currency} from "../../constants/currency";
import cn from "./PriceGameBox.module.scss";

const PriceGameBox = ({game}) => {

  return (
    <div className = {cn.purchase}>
      <span className = {cn.price}>
        {game.price} {currency}
      </span>
      <ButtonAddToCart game = {game} />
    </div>
  );
};

export default PriceGameBox;
