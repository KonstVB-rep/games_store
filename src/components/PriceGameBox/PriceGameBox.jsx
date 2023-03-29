import React from "react";
import {ButtonAddToCart} from "../Buttons/ButtonAddToCart";
import {currency} from "../../constants/currency";
import cn from "./PriceGameBox.module.scss";
import {useSelector} from "react-redux";
import {selectGame} from "../../store/games/gamesSlice";

const PriceGameBox = ({id,price}) => {

  return (
    <div className = {cn.purchase}>
      <span className = {cn.price}>
        {price} {currency}
      </span>
      <ButtonAddToCart id = {id} />
    </div>
  );
};

export default PriceGameBox;
