import {useDispatch, useSelector} from "react-redux";
import {clearCartList, selectAllItemsCart} from "../../../store/cart/cartSlice";
import {ButtonSilver} from "../../Buttons/ButtonSilver";
import cn from "../../../pages/OrderPage/OrderPage.module.scss";
import React from "react";

const ClearButton = () => {

  const dispatch = useDispatch();

  const allGames = useSelector(selectAllItemsCart)

  const clearCart = () =>{
    dispatch(clearCartList())
  }

  return(
    <>
      {allGames.length ? <ButtonSilver title = "clear cart" classname = {cn.button_clear} click = {clearCart} /> : null}
    </>
  )
}

export default ClearButton;