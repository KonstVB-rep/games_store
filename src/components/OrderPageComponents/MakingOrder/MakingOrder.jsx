import React, {useTransition} from 'react';
import {Button} from "../../Buttons/Button";
import {clearCartList, selectTotalPrice} from "../../../store/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {currency} from "../../../constants/currency";
import {PortalCreator} from "../../PortalCreator";
import { animateScroll as scroll } from "react-scroll";
import useVisible from "../../../hooks/useVisible";
import cn from './MakingOrder.module.scss'

const PaymentForm = React.lazy(() => import('../../PaymentForm').then(module => ({default: module.PaymentForm})))

const TotalPrice = () => {

  const totalPrice = useSelector(selectTotalPrice);
  return(
    <p className = {cn["total-price"]}>
      <span>Total price: </span>
      <span className = {cn.price}>
            {totalPrice} {currency}
      </span>
    </p>
  )
}

const MakingOrder = () => {

  const dispatch = useDispatch();
  const [, startTransition] = useTransition()

  const [isShow, setIsShow] = useVisible(() => dispatch(clearCartList()));

  const handleClick = () => {
    setIsShow(!isShow)
    // if(isShow){
    //   document.body.style.overflow = "visible";
    //   document.body.style.overflowX = "hidden";
    //   scroll.scrollToTop({
    //     duration: 500,
    //     smooth: true,
    //   })
    // }
    // else {
    //   document.body.style.overflow = "hidden";
    // }
  }


  return (
    <>
      <div className = {cn.wrapper}>
        <TotalPrice/>
        <Button classname = {cn["order-button"]} onClick = {handleClick}>place on order</Button>
      </div>
      <PaymentForm showModal = {isShow} setShowModal = {() => startTransition(handleClick)} />
    </>
  );
};

export default MakingOrder;