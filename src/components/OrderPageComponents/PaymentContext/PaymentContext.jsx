import React, {createContext} from 'react';
import usePayment from "../PaymentForm/hooks/usePayment";

export const PaymentContext = createContext(null)

const OrderContextProvider = ({children}) => {

  const value = {
    ...usePayment()
  }

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};

export default OrderContextProvider;