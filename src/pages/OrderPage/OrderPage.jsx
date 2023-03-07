import React from 'react';
import OrderList from "../../components/OrderPageComponets/OrderList/OrderList";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import cn from './OrderPage.module.scss';



const OrderPage = () => {

  return (
    <main className={cn.main}>
      <section className={cn.section}>
        <BackButton/>
        <OrderList/>
      </section>
    </main>
  );
};

export default OrderPage;