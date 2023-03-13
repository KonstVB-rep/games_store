import React, {useState} from 'react';
import OrderList from "../../components/OrderPageComponets/OrderList/OrderList";
import Payment from "../../components/Payment/Payment";
import cn from './OrderPage.module.scss';



const OrderPage = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <main className={cn.main}>
      <section className={cn.section}>
        {/*<OrderList/>*/}
        <Payment showModal={showModal} setShowModal={setShowModal}/>
        <button onClick={() => setShowModal(true)}>Open</button>
      </section>
    </main>
  );
};

export default OrderPage;