import React from 'react';
import {OrderList} from "../../components/OrderPageComponents/OrderList";
import cn from './OrderPage.module.scss';



const OrderPage = () => {

  return (
    <main className={cn.main}>
      <section className={cn.section}>
        <OrderList/>
      </section>
    </main>
  );
};

export default OrderPage;