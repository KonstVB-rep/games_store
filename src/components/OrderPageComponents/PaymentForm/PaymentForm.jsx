import React from 'react';

import {ModalLayout} from "../../ModalLayout";

import {Card} from "./Card";
import {Form} from "./Form";
import cn from './PaymentForm.module.scss'
import usePaymentContext from "./hooks/usePaymentContext";


const PaymentForm = () => {

  const {isShowPaymentForm,setIsShowPaymentForm} = usePaymentContext()

  return (
    <div className = {cn.wrapper}>
      <ModalLayout bg = {cn.bg} content = {cn.content} show = {isShowPaymentForm}
                   setShow = {() => setIsShowPaymentForm(false)} modal = {cn.wrapper}>
        <Card />
        <Form />
      </ModalLayout>
    </div>
  );
};


export default PaymentForm;