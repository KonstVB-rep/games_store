import React from 'react';
import {useSelector} from "react-redux";
import {OrderItem} from "../OrderItem";
import TitleEmptyPage from "../../TitleEmptyPage/TitleEmptyPage";
import cn from "../../../pages/OrderPage/OrderPage.module.scss";
import {MakingOrder} from "../MakingOrder";

const OrderList = () => {

  const {cartList} = useSelector(state => state.cart)

  const renderCardsList = cartList.map(item => <OrderItem key={item.id} id={item.id}/>)


  return (
    <div className={cn['card-list']}>
        {cartList.length ?
          <>
            <div className={cn.wrapper}>
              {renderCardsList}
            </div>
            <MakingOrder/>
          </>
            :
          <TitleEmptyPage text ='The shopping cart is empty'/>}
    </div>
  );
};

export default OrderList;