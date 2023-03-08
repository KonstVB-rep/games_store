import React from "react";
import cn from "./CartMenuItem.module.scss";
import { currency } from "../../../constants/currency";

const CartMenuItem = ({ name, totalCount, price, classname }) => {
  const totalPriceGame = totalCount * price;
  return (
    <div className={`${cn.item} ${classname}`}>
      <span className={cn.item__title}>{name}</span>
      <span className={cn.item__count}>{totalCount}</span>
      <span>
        {totalPriceGame} {currency}
      </span>
    </div>
  );
};

export default CartMenuItem;
