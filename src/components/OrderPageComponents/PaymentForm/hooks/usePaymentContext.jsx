import React, {useContext} from 'react';
import {PaymentContext} from "../../PaymentContext/PaymentContext";

const usePaymentContext = () => {
  return useContext(PaymentContext);
};

export default usePaymentContext;