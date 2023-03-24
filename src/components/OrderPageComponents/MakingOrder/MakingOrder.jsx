import React from 'react';
import {Button} from "../../Buttons/Button";
import { selectTotalPrice} from "../../../store/cart/cartSlice";
import {useSelector} from "react-redux";
import {currency} from "../../../constants/currency";
import cn from './MakingOrder.module.scss'

const TotalPrice = () => {

  const totalPrice = useSelector(selectTotalPrice);

  return (
    <p className = {cn["total-price"]}>
      <span>Total price: </span>
      <span className = {cn.price}>
            {totalPrice} {currency}
      </span>
    </p>
  )
}


const MakingOrder = ({isShow, setIsShow}) => {

  const length = useSelector(state => state.cart.cartList.length);

  return (

    <>
      {length ?
        <>
          <div className = {cn.wrapper}>
            <TotalPrice />
            <Button classname = "order-button" onClick = {() => setIsShow(!isShow)} ariaLabel='place an order'>place on order</Button>
          </div>
        </> : null
      }
    </>
  );
};

export default MakingOrder;