import React from 'react';
import {randomNumber} from "../../../utils/randomNumber";
import cn from './OrderModal.module.scss';
import {useDispatch} from "react-redux";
import {clearCartList} from "../../../store/cart/cartSlice";

const orderNumber = randomNumber(1000, 10000000)

const OrderModal = ({showModal, setShowModal}) => {

  const dispatch = useDispatch();

  const classHide = showModal ? cn['active'] : null;

  const handleClickHide = (e) => {
    if([...e.target.classList].includes(cn['modal-order']) || e.target.className ===cn['icon-close']){
      setShowModal(e);
      dispatch(clearCartList())
    }
  }

  return (
    <div className={`${cn['modal-order']} ${classHide}`} onClick={handleClickHide}>
      <div className= {cn.content}>
        <h2  className={`${cn.title} ${cn.text}`}>thanks for the purchase</h2>
        <p  className={cn.text}>your order number: <span className={cn.text__span}>№{orderNumber}</span></p>
        <p  className={cn.text}>the manager will contact you soon.</p>
        <button  className={cn['icon-wrapper']}>
          <img src = "/icons8-ок-96.svg" alt = "" className={cn['icon-close']} />
        </button>
      </div>
    </div>
  );
};

export default OrderModal;