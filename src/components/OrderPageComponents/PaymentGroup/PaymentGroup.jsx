import React, {Suspense} from 'react';
import {MakingOrder} from "../MakingOrder";
import usePaymentContext from "../PaymentForm/hooks/usePaymentContext";

const OrderModal = React.lazy(() => import("../OrderModal").then((module) => ({
  default: module.OrderModal
})))

const PaymentForm = React.lazy(() => import("../PaymentForm").then((module) => ({
  default: module.PaymentForm
})))

const PaymentGroup = () => {

  const {isShowPaymentForm} = usePaymentContext()

  return (
    <>
        {isShowPaymentForm &&
          <Suspense fallback = {null}>
            <PaymentForm />
          </Suspense>
         }
        <MakingOrder />
      <Suspense fallback = {null}>
        <OrderModal />
      </Suspense>
    </>
  );
};

export default PaymentGroup;