import React from 'react';
import {OrderList} from "../../components/OrderPageComponents/OrderList";
import MotionMain from "../../components/MotionMain/MotionMain";
import {ClearButton} from "../../components/OrderPageComponents/ClearButton";
import {PaymentGroup} from "../../components/OrderPageComponents/PaymentGroup";
import cn from './OrderPage.module.scss';

const OrderPage = () => {

  return (
    <MotionMain classname={cn.main}>
      <section className={cn.section}>
        <ClearButton/>
        <OrderList/>
        <PaymentGroup/>
      </section>
    </MotionMain>
  );
};

export default OrderPage;