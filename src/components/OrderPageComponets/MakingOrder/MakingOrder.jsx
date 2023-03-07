import React, {useState} from 'react';
import {Button} from "../../Buttons/Button";
import {selectTotalPrice} from "../../../store/cart/cartSlice";
import {useSelector} from "react-redux";
import {currency} from "../../../constants/currency";
import {PortalCreator} from "../../PortalCreator";
import cn from './MakingOrder.module.scss'
import {OrderModal} from "../OrderСonfirmationModal";
import { animateScroll as scroll } from "react-scroll";


const MakingOrder = () => {

  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
    if(showModal){
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
        <OrderModal showModal = {showModal} setShowModal = {handleClick} />
      </PortalCreator>
    </>
  );
};

export default MakingOrder;