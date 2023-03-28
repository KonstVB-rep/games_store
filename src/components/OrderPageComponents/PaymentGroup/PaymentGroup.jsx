import React, {useTransition, Suspense} from 'react';
import usePayment from "../PaymentForm/hook/usePayment";
import {useDispatch} from "react-redux";
import useVisible from "../../../hooks/useVisible";
import {clearCartList} from "../../../store/cart/cartSlice";
import {MakingOrder} from "../MakingOrder";

const OrderModal = React.lazy(() => import("../OrderModal").then((module) => ({
  default: module.OrderModal
})))

const PaymentForm = React.lazy(() => import("../PaymentForm").then((module) => ({
  default: module.PaymentForm
})))

const PaymentGroup = () => {

  const {
    showConfirmModal,
    setShowConfirmModal,
    ...restProps
  } = usePayment()

  const dispatch = useDispatch();
  const [, startTransition] = useTransition();

  const [isShow, setIsShow] = useVisible(() => dispatch(clearCartList()))

  const handleClick = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      {isShow &&
        <Suspense fallback = {null}>
          <PaymentForm showModal = {isShow}
                       setShowModal = {() => startTransition(handleClick)}
                       setShowConfirmModal = {setShowConfirmModal} {...restProps} />
        </Suspense>}
      <MakingOrder isShow = {isShow} setIsShow = {setIsShow} />
      {showConfirmModal &&
        <Suspense fallback = {null}>
          <OrderModal showModal = {showConfirmModal} setShowModal = {() => startTransition(setShowConfirmModal)} />
        </Suspense>}
    </>
  );
};

export default PaymentGroup;