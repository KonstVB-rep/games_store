import React from 'react';
import usePaymentContext from './hooks/usePaymentContext';

import ModalLayout from '../../ModalLayout';
import Card from './Card';
import Form from './Form';

import cn from './styles.module.scss';

const PaymentForm = () => {
    const { isShowPaymentForm, setIsShowPaymentForm } = usePaymentContext();

    return (
        <div className={cn.wrapper}>
            <ModalLayout
                bg={cn.bg}
                content={cn.content}
                show={isShowPaymentForm}
                setShow={setIsShowPaymentForm}
                modal={cn.wrapper}
            >
                <Card />
                <Form />
            </ModalLayout>
        </div>
    );
};

export default PaymentForm;
