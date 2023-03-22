import React from 'react';
import {OrderList} from "../../components/OrderPageComponents/OrderList";
import {ButtonSilver} from "../../components/Buttons/ButtonSilver";
import {clearCartList} from "../../store/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import cn from './OrderPage.module.scss';
import {MakingOrder} from "../../components/OrderPageComponents/MakingOrder";



const OrderPage = () => {

  const dispatch = useDispatch();

  const clearCart = () =>{
    dispatch(clearCartList())
  }

  return (
    <main className={cn.main}>
      <section className={cn.section}>
        <ButtonSilver title="clear cart" classname={cn.button_clear} click={clearCart}/>
        <OrderList/>
        <MakingOrder />
      </section>
    </main>
  );
};

export default OrderPage;