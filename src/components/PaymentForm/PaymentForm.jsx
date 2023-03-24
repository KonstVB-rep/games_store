import React, {useState, useTransition} from 'react';
import {ModalLayout} from "../ModalLayout";
import {Card} from "./Card";
import {Form} from "./Form";
import {normalizeCardNumber} from "../../utils/normalizeCardNumber";
import cn from './PaymentForm.module.scss'


const OrderModal = React.lazy(() => import("../OrderPageComponents/OrderModal").then((module) => ({
  default: module.OrderModal
})))

const PaymentForm = ({showModal, setShowModal, setShowConfirmModal,...restProps}) => {

  // const [numberCard, setNumberCard] = useState('');
  // const [month, setMonth] = useState('month');
  // const [year, setYear] = useState('year');
  // const [name, setName] = useState('');
  // const [ccv, setCcv] = useState('');
  // const [turnClass, setTurnCLass] = useState('');
  // const [showConfirmModal, setShowConfirmModal] = useState(false)
  //
  // const handleFocus = () => {
  //   setTurnCLass('turned')
  // }
  //
  // const handleBlur = () => {
  //   setTurnCLass('')
  // }
  //
  // const handleSetCardNumber = (event) => {
  //   const {value} = event.target
  //   event.target.value = normalizeCardNumber(value)
  //   setNumberCard(event.target.value)
  // }

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