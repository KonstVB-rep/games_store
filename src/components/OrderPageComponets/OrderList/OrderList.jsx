import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {OrderItem} from "../OrderItem";
import TitleEmptyPage from "../../TitleEmptyPage/TitleEmptyPage";
import {MakingOrder} from "../MakingOrder";
import {ButtonSilver} from "../../Buttons/ButtonSilver";
import cn from "../../../pages/OrderPage/OrderPage.module.scss";
import {clearCartList} from "../../../store/cart/cartSlice";

const OrderList = () => {

  const dispatch = useDispatch()

  const {cartList} = useSelector(state =>state.cart)

  const clearCart = () =>{
    dispatch(clearCartList())
  }

  const renderCardsList = cartList.map(item => <OrderItem key={item.id} game={item}/>)


  return (
    <div className={cn['card-list']}>
        {renderCardsList.length ?
          <>
            <ButtonSilver title="clear cart" classname={cn.button_clear} click={clearCart}/>
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