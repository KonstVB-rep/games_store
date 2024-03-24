import { useContext } from 'react';
import { PaymentContext } from '../../../../contexts/PaymentContextProvider';

const usePaymentContext = () => {
    return useContext(PaymentContext);
};

export default usePaymentContext;
