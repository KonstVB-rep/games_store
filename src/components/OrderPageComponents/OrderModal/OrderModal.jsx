import React, {useEffect} from 'react';
import {randomNumber} from "../../../utils/randomNumber";
import {useDispatch} from "react-redux";
import {clearCartList} from "../../../store/cart/cartSlice";
import {ModalLayout} from "../../ModalLayout";
import {useNavigate} from "react-router-dom";
import cn from './OrderModal.module.scss';

const orderNumber = randomNumber(1000, 10000000)

const OrderModal = ({showModal, setShowModal}) => {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const clearCart = () => {
    setShowModal(false)
    dispatch(clearCartList())
    navigate('/');
  }

  useEffect(() => {
    let timer;
    if (showModal) {
      setTimeout(() => {
        clearCart()
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showModal])


  return (
    <ModalLayout bg = {cn.bg} popup = {cn.popup} content = {cn.content} show = {!!showModal}
                 setShow = {clearCart} modal = {cn.wrapper}>
      <p className = {cn.title}>thanks for the purchase!</p>
      <p className = {cn.text}>your order number: <span className = {cn.text__span}>№{orderNumber}</span></p>
      <p className = {cn.text}>the manager will contact you soon.</p>
      <div className = {cn['icon-wrapper']}>
        <img src = "/done.svg" className = {cn.icon} alt = "Done" />
      </div>
    </ModalLayout>
  );
};

export default OrderModal;

