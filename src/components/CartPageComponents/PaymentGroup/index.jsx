import React, { Suspense } from 'react';

import MakingOrder from '../MakingOrder';
import usePaymentContext from '../PaymentForm/hooks/usePaymentContext';

const OrderModal = React.lazy(() => import('../OrderModal'));

const PaymentForm = React.lazy(() => import('../PaymentForm'));

const PaymentGroup = () => {
    const { isShowPaymentForm } = usePaymentContext();

    return (
        <>
            {isShowPaymentForm && (
                <Suspense fallback={null}>
                    <PaymentForm />
                </Suspense>
            )}

            <MakingOrder />

            <Suspense fallback={null}>
                <OrderModal />
            </Suspense>
        </>
    );
};

export default PaymentGroup;
