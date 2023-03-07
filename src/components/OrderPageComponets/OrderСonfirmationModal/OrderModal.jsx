import React from 'react';
import cn from './OrderModal.module.scss';
import {randomNumber} from "../../../utils/randomNumber";

const orderNumber = randomNumber(1000, 10000000)

const OrderModal = ({showModal, setShowModal}) => {

  const classHide = showModal ? cn['active'] : null;

  console.log(showModal)
  const handleClickHide = (e) => {
    console.log([...e.target.classList].includes(cn['modal-order']))
    if([...e.target.classList].includes(cn['modal-order']) || e.target.className === cn.close){
      setShowModal(e)
    }
  }

  return (
    <div className={`${cn['modal-order']} ${classHide}`} onClick={handleClickHide}>
      <div className= {cn.content}>
        <button className={cn.close} >X</button>
        <h2  className={`${cn.title} ${cn.text}`}>thanks for the purchase</h2>
        <p  className={cn.text}>your order number: <span className={cn.text__span}>{orderNumber}</span></p>
        <p  className={cn.text}>the manager will contact you soon.</p>
        <div  className={cn['icon-wrapper']}>
          <img src = "/icons8-ок-96.svg" alt = "" />
        </div>
      </div>
    </div>
  );
};

export default OrderModal;