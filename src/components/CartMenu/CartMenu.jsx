import React from "react";
import cn from "./CartMenu.module.scss";
import { Button } from "../Button";
import CartMenuItem from "./CartMenuItem/CartMenuItem";
import { useSelector } from "react-redux";
import { selectAllItems, selectTotalPrice } from "../../store/cart/cartSlice";
import { currency } from "../../constants/currency";

const CartMenu = () => {
  const totalPriceCart = useSelector(selectTotalPrice);
  const allItemsInCart = useSelector(selectAllItems);
  return (
    <div className={cn.menu}>
      <div className={cn.orders}>
        <div className={cn.grid}>
          <span>Наименование</span>
          <span>Шт</span>
          <span>Стоимость</span>
        </div>
        {allItemsInCart.map((item) => (
          <CartMenuItem key={item.id} {...item} classname={cn.grid} />
        ))}
      </div>
      <div className={cn.total}>
        <span>Итого:</span>
        <span>
          {totalPriceCart} {currency}
        </span>
      </div>
      <Button classname={cn.btn_cart}>Оформить заказ</Button>
    </div>
  );
};

export default CartMenu;
