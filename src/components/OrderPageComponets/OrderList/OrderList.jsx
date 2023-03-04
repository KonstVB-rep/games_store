import React from 'react';
import {useSelector} from "react-redux";
import {OrderItem} from "../OrderItem";
import TitleEmptyPage from "../../TitleEmptyPage/TitleEmptyPage";
import {MakingOrder} from "../MakingOrder";
import cn from "../../../pages/OrderPage/OrderPage.module.scss";

const OrderList = () => {

  const {cartList} = useSelector(state =>state.cart)

  const renderCardsList = cartList.map(item => <OrderItem key={item.id} game={item}/>)

  return (
    <div className={cn['card-list']}>
        {renderCardsList.length ?
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