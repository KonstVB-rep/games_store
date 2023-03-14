import React, {useEffect, useState} from 'react';
import {Button} from "../../Buttons/Button";
import {clearCartList, selectTotalPrice} from "../../../store/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {currency} from "../../../constants/currency";
import {PortalCreator} from "../../PortalCreator";
import {OrderModal} from "../OrderModal";
import { animateScroll as scroll } from "react-scroll";
import useVisible from "../../../hooks/useVisible";
import cn from './MakingOrder.module.scss'
import {PaymentForm} from "../../PaymentForm";


const MakingOrder = () => {

  const dispatch = useDispatch();

  const [isShow, setIsShow] = useVisible(() => dispatch(clearCartList()));


  const handleClick = () => {
    setIsShow(!isShow)
    if(isShow){
      document.body.style.overflow = "visible";
      document.body.style.overflowX = "hidden";
      scroll.scrollToTop({
        duration: 500,
        smooth: true,
      })
    }
    else {
      document.body.style.overflow = "hidden";
    }
  }

  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      <div className = {cn.wrapper}>
        <p className = {cn["total-price"]}>
          <span>Total price: </span>
          <span className = {cn.price}>
            {totalPrice} {currency}
          </span>
        </p>
        <Button classname = {cn["order-button"]} onClick = {handleClick}>place on order</Button>
      </div>
      <PortalCreator>
        <PaymentForm showModal = {isShow} setShowModal = {handleClick} />
      </PortalCreator>
    </>
  );
};

export default MakingOrder;