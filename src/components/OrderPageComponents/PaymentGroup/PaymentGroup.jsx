import React, {useTransition, Suspense, useState} from 'react';
import {useDispatch} from "react-redux";

import useVisible from "hooks/useVisible";
import {clearCartList} from "store/cart/cartSlice";
import {MakingOrder} from "../MakingOrder";

const OrderModal = React.lazy(() => import("../OrderModal").then((module) => ({
  default: module.OrderModal
})))

const PaymentForm = React.lazy(() => import("../PaymentForm").then((module) => ({
  default: module.PaymentForm
})))

const PaymentGroup = () => {

  const dispatch = useDispatch();
  const [, startTransition] = useTransition();

  const [isShow, setIsShow] = useVisible(() => dispatch(clearCartList()))
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const handleClick = () => {
    setIsShow(!isShow)
  }
  return (
    <>
      {isShow &&
        <Suspense fallback = {null}>
          <PaymentForm showModal = {isShow} setShowModal = {() => startTransition(handleClick)} setShowConfirmModal={setShowConfirmModal}/>
        </Suspense>}
      <MakingOrder isShow = {isShow} setIsShow = {setIsShow} />
      <Suspense fallback = {null}>
        <OrderModal showModal = {showConfirmModal} setShowModal = {() => startTransition(setShowConfirmModal)} />
      </Suspense>
    </>
  );
};

export default PaymentGroup;