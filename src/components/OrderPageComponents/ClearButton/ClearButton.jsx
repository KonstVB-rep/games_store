import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Button} from "../../Buttons/Button";
import {clearCartList, selectAllItemsCart} from "store/cart/cartSlice";
import cn from "pages/OrderPage/OrderPage.module.scss";

const ClearButton = () => {

  const dispatch = useDispatch();

  const allGames = useSelector(selectAllItemsCart)

  const clearCart = () => {
    dispatch(clearCartList())
  }

  return (
    <>
      {allGames.length > 0 && <div className = {cn['btn-wrapper']}>
        <Button title = "clear cart" classname = "silver" onClick = {clearCart} ariaLabel = "clear cart">
          clear cart</Button>
      </div> }
    </>
  )
}

export default ClearButton;