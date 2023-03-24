import React, {useTransition} from 'react';
import {PaymentForm} from "../PaymentForm";
import MakingOrder from "../OrderPageComponents/MakingOrder/MakingOrder";
import {OrderModal} from "../OrderPageComponents/OrderModal";
import usePayment from "../PaymentForm/hook/usePayment";
import useVisible from "../../hooks/useVisible";
import {clearCartList} from "../../store/cart/cartSlice";
import {useDispatch} from "react-redux";

const PaymentGroup = () => {

  const {
    showConfirmModal,
    setShowConfirmModal,
    ...restProps
  } =usePayment()

  const dispatch = useDispatch();
  const [, startTransition] = useTransition();

  const [isShow, setIsShow] = useVisible(() => dispatch(clearCartList()))

  const handleClick = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      {isShow && <PaymentForm showModal = {isShow} setShowModal = {() => startTransition(handleClick)} setShowConfirmModal={setShowConfirmModal} {...restProps}/>}
      <MakingOrder isShow={isShow} setIsShow={setIsShow}/>
      {showConfirmModal && <OrderModal showModal = {showConfirmModal} setShowModal = {() => startTransition(setShowConfirmModal)} /> }
    </>
  );
};

export default PaymentGroup;