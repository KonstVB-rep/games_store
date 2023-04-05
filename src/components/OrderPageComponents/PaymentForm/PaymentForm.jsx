import React from 'react';
import {ModalLayout} from "../../ModalLayout";
import {Card} from "./Card";
import {Form} from "./Form";

import cn from './PaymentForm.module.scss'
import usePayment from "./hook/usePayment";


const PaymentForm = ({showModal, setShowModal, setShowConfirmModal}) => {

  const {turnClass,...restProps} = usePayment();
  const {numberCard,month, year, name, ccv} = restProps;

  const formProps = {
    setShowModal,
    setShowConfirmModal,
    ...restProps
  }

  return (
    <div className = {cn.wrapper}>
      <ModalLayout bg = {cn.bg} content = {cn.content} show = {showModal}
                   setShow = {() => setShowModal(false)} modal = {cn.wrapper}>
        <Card numberCard = {numberCard} month = {month} year = {year} name = {name} ccv = {ccv}
              turnClass = {turnClass} />
        <Form {...formProps} />
      </ModalLayout>
    </div>
  );
};


export default PaymentForm;