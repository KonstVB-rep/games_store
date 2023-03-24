import React from 'react';
import {ModalLayout} from "../../ModalLayout";
import {Card} from "./Card";
import {Form} from "./Form";

import cn from './PaymentForm.module.scss'


const PaymentForm = ({showModal, setShowModal, setShowConfirmModal,...restProps}) => {

  const {
    numberCard,
    month,
    year,
    ccv,
    name,
    turnClass
    } = restProps


  const formProps = {
    setShowModal,
    setShowConfirmModal,
    ...restProps
  }

  return (
    <div className={cn.wrapper}>
      <ModalLayout bg = {cn.bg} popup = {cn.popup} content = {cn.content} show = {showModal}
                   setShow = {() => setShowModal(false)} modal={cn.wrapper}>
        <Card numberCard = {numberCard} month = {month} year = {year} name = {name} ccv = {ccv}
              turnClass = {turnClass} />
        <Form {...formProps} />
      </ModalLayout>
    </div>
  );
};


export default PaymentForm;