import React from 'react';

import {OrderList} from "../../components/OrderPageComponents/OrderList";
import MotionMain from "../../components/MotionMain/MotionMain";
import {ClearButton} from "../../components/OrderPageComponents/ClearButton";
import {PaymentGroup} from "../../components/OrderPageComponents/PaymentGroup";

import cn from './OrderPage.module.scss';
import OrderContextProvider from "../../components/OrderPageComponents/PaymentContext/PaymentContext";


const OrderPage = () => {

  return (
    <MotionMain classname = {cn.main}>
      <div className = {cn.section}>
        <ClearButton />
        <OrderList />
        <OrderContextProvider>
            <PaymentGroup />
        </OrderContextProvider>
      </div>
    </MotionMain>
  );
};

export default OrderPage;