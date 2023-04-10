import React from 'react';
import {useSelector} from "react-redux";

import {OrderItem} from "../OrderItem";
import TitleEmptyPage from "../../TitleEmptyPage/TitleEmptyPage";
import cn from "../../../pages/OrderPage/OrderPage.module.scss";



const OrderList = () => {

  const {cartList} = useSelector(state => state.cart)

  const renderCardsList = cartList.map(item => <OrderItem key={item.id} id={item.id}/>)


  return (
    <section className={cn['card-list']}>
        {cartList.length ?
          <>
            <h1 className='visually-hidden'>List of game orders</h1>
            <div className={cn.wrapper}>
              {renderCardsList}
            </div>
          </>
            :
          <TitleEmptyPage text ='The shopping cart is empty'/>}
    </section>
  );
};

export default OrderList;