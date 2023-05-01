import React, {Suspense, useState} from 'react';
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

  const [isShowPaymentForm, setIsShowPaymentForm] = useVisible(() => dispatch(clearCartList()))
  const [showConfirmModal, setShowConfirmModal] = useState(false)


  return (
    <>
      {isShowPaymentForm &&
        <Suspense fallback = {null}>
          <PaymentForm showModalPaymentForm = {isShowPaymentForm} setShowModalPaymentForm = {()=>setIsShowPaymentForm(!isShowPaymentForm)}
                       setShowConfirmModal = {setShowConfirmModal} />
        </Suspense>}
      <MakingOrder isShowPaymentForm = {isShowPaymentForm} setIsShowPaymentForm = {setIsShowPaymentForm} />
      <Suspense fallback = {null}>
        <OrderModal showModal = {showConfirmModal} setShowModal = {setShowConfirmModal} />
      </Suspense>
    </>
  );
};

export default PaymentGroup;