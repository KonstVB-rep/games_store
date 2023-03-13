import React from 'react';
import {randomNumber} from "../../../utils/randomNumber";
import {useDispatch} from "react-redux";
import {clearCartList} from "../../../store/cart/cartSlice";
import {Dialog} from '@headlessui/react'
import cn from './OrderModal.module.scss';
import Payment from "../../Payment/Payment";

const orderNumber = randomNumber(1000, 10000000)

const OrderModal = ({showModal, setShowModal}) => {

  const dispatch = useDispatch();

  const handleClickHide = (e) => {
    if([...e.target.classList].includes(cn['modal-order']) || e.target.className ===cn['icon-close']){
      setShowModal(e);
      dispatch(clearCartList())
    }
  }

  return (
    <Dialog open = {showModal} onClose = {() => setShowModal(false)}>
      <div className = {cn.bg}>
        <Dialog.Panel className = {cn.popup}>
          <h2 className={cn.title}>thanks for the purchase</h2>
          <Dialog.Title className={cn.content}>
            <p className={cn.text}>your order number: <span className = {cn.text__span}>№{orderNumber}</span></p>
            <p className={cn.text}>the manager will contact you soon.</p>
            <button  className={cn['icon-wrapper']} onClick={handleClickHide} title='Close window'>
              <img src = "/icons8-ок-96.svg" className={cn['icon-close']} alt="close modal window"/>
            </button>
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default OrderModal;

