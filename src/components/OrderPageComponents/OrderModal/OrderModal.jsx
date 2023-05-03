import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {randomNumber} from "utils/randomNumber";
import {clearCartList} from "store/cart/cartSlice";
import {ModalLayout} from "../../ModalLayout";
import DONE from 'assets/done.svg'

import cn from './OrderModal.module.scss';
import usePaymentContext from "../PaymentForm/hooks/usePaymentContext";

const orderNumber = randomNumber(1000, 10000000)

const OrderModal = () => {

  const {showConfirmModal,setShowConfirmModal} = usePaymentContext()

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clearCart = () => {
    setShowConfirmModal(false)
    dispatch(clearCartList())
    navigate('/games_store');
  }

  useEffect(() => {
    let timer;
    if (showConfirmModal) {
      setTimeout(() => {
        clearCart()
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [showConfirmModal])

  return (
    <>
      {showConfirmModal &&
        <ModalLayout bg = {cn.bg} content = {cn.content} show = {!!showConfirmModal}
                     setShow = {clearCart} modal = {cn.wrapper}>
          <h2 className = {cn.title}>thanks for the purchase!</h2>
          <p className = {cn.text}>your order number: <span className = {cn.text__span}>№{orderNumber}</span></p>
          <p className = {cn.text}>the manager will contact you soon.</p>
          <p className = {cn.text}>after a few seconds you will be redirected to the main page</p>
          <div className = {cn['icon-wrapper']}>
            <img src ={DONE} className = {cn.icon} alt = "Done" />
          </div>
        </ModalLayout>
      }
    </>


  )
    ;
};

export default OrderModal;

