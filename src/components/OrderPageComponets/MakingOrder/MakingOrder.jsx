import React from 'react';
import {Button} from "../../Buttons/Button";
import {selectTotalPrice} from "../../../store/cart/cartSlice";
import {useSelector} from "react-redux";
import {currency} from "../../../constants/currency";
import cn from './MakingOrder.module.scss'


const MakingOrder = () => {

  const totalPrice = useSelector(selectTotalPrice)
  return (
    <div className={cn.wrapper}>
      <p className={cn['total-price']}>Total price: <span>{totalPrice} {currency}</span></p>
      <Button classname={cn['order-button']}>place on order</Button>
    </div>
  );
};

export default MakingOrder;