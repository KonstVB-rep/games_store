import React, {Fragment} from 'react';
import {Dialog,Transition } from '@headlessui/react'
import {Card} from "./Card";
import {Form} from "./Form";
import usePayment from "./hook/usePayment";
import OrderModal from "../OrderPageComponets/OrderModal/OrderModal";
import cn from './PaymentForm.module.scss'

const PaymentForm = ({showModal, setShowModal}) => {

  const {
    numberCard,
    month,
    setMonth,
    year,
    setYear,
    name,
    setName,
    ccv,
    setCcv,
    turnClass,
    showConfirmModal,
    setShowConfirmModal,
    handleSetCardNumber,
    handleFocus,
    handleBlur,
  } = usePayment()


  const formProps = {
    numberCard,
    month,
    setMonth,
    year,
    setYear,
    name,
    setName,
    ccv,
    setCcv,
    setShowModal,
    setShowConfirmModal,
    handleSetCardNumber,
    handleFocus,
    handleBlur,
  }


  return (
    <>
        <Dialog
          open = {showModal}
          onClose = {() => setShowModal(false)}>
          <div className = {cn.bg} />
          <Dialog.Panel className = {cn.popup}>
            <Dialog.Title className = {cn.content}>
              <Card numberCard = {numberCard} month = {month} year = {year} name = {name} ccv = {ccv}
                    turnClass = {turnClass}
              />
              <Form
                {...formProps}
              />
            </Dialog.Title>
          </Dialog.Panel>
        </Dialog>
      <OrderModal showModal = {showConfirmModal} setShowModal = {setShowConfirmModal} />
    </>
  );
};


export default PaymentForm;