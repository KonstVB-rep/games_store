import React, {useEffect, useRef, useState} from "react";
import CartMenuItem from "./CartMenuItem/CartMenuItem";
import {useSelector} from "react-redux";
import {selectAllItemsCart, selectTotalPrice} from "../../store/cart/cartSlice";
import {currency} from "../../constants/currency";
import {Link} from "react-router-dom";
import {Button} from "../Buttons/Button";
import cl from "./CartMenu.module.scss";
import cn from "../ShoppingCart/ShoppingCart.module.scss";

const CartMenu = () => {
  const totalPriceCart = useSelector(selectTotalPrice);
  const allItemsInCart = useSelector(selectAllItemsCart);
  const ref = useRef(null)

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const isShowCart = (e) => {
      if (e.target.matches(`.${cn.cart__icon}`)) {
        setShowCart(p => !p)
      } else if (!ref.current?.contains(e.target) || e.target.textContent === 'Оформить заказ') {
        setShowCart(false)
      }
    }
    document.addEventListener('click', isShowCart)
    return () => document.removeEventListener('click', isShowCart)
  }, [])


  return(
    <div className = {`${cl.menu} ${showCart && cl.menu_visible}`} ref = {ref}>
      <div className = {cl.orders}>
        <div className = {cl.grid}>
          <span>Наименование</span>
          <span>Шт</span>
          <span>Стоимость</span>
        </div>
        {allItemsInCart.map((item) => (
          <CartMenuItem key = {item.id} {...item} classname = {cl.grid} />
        ))}
      </div>
      <div className = {cl.total}>
        <span>Итого:</span>
        <span>
          {totalPriceCart} {currency}
        </span>
      </div>
      <Link to = "order">
        <Button classname = {cl.btn_cart}>Оформить заказ</Button>
      </Link>
    </div>
  )
};

export default CartMenu;
