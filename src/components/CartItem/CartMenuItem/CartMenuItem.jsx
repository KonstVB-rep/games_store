import React from "react";
import cn from "./CartMenuItem.module.scss";
import { ruble } from "../../../constants/currency";

const CartMenuItem = ({ name, totalCount, price, classname }) => {
  const totalPriceGame = totalCount * price;
  return (
    <div className={`${cn.item} ${classname}`}>
      <span className={cn.item__title}>{name}</span>
      <span>{totalCount}</span>
      <span>
        {totalPriceGame} {ruble}
      </span>
    </div>
  );
};

export default CartMenuItem;
