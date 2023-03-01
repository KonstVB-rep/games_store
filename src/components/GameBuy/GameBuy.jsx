import React from "react";
import {ButtonBuy} from "../Buttons/ButtonBuy";
import {currency} from "../../constants/currency";
import cn from "./GameBuy.module.scss";

const GameBuy = ({game}) => {

  return (
    <div className = {cn.purchase}>
      <span className = {cn.price}>
        {game.price} {currency}
      </span>
      <ButtonBuy game = {game} />
    </div>
  );
};

export default GameBuy;
