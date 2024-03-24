import React, { createContext } from 'react';
import usePayment from '../../components/CartPageComponents/PaymentForm/hooks/usePayment';

export const PaymentContext = createContext(null);

const PaymentContextProvider = ({ children }) => {
    const value = {
        ...usePayment(),
    };

    return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
};

export default PaymentContextProvider;
