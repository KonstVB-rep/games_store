import React from 'react';

import {ModalLayout} from "../../ModalLayout";

import {Card} from "./Card";
import {Form} from "./Form";
import cn from './PaymentForm.module.scss'
import usePayment from "./hook/usePayment";


const PaymentForm = ({showModalPaymentForm, setShowModalPaymentForm, setShowConfirmModal}) => {

  const {turnClass,...restProps} = usePayment();
  const {numberCard,name, ccv,cardValidityPeriod} = restProps;

  const formProps = {
    setShowModalPaymentForm,
    setShowConfirmModal,
    ...restProps
  }

  return (
    <div className = {cn.wrapper}>
      <ModalLayout bg = {cn.bg} content = {cn.content} show = {showModalPaymentForm}
                   setShow = {() => setShowModalPaymentForm(false)} modal = {cn.wrapper}>
        <Card numberCard = {numberCard}
              cardValidityPeriod={cardValidityPeriod}
              name = {name} ccv = {ccv}
              turnClass = {turnClass} />
        <Form {...formProps} />
      </ModalLayout>
    </div>
  );
};


export default PaymentForm;