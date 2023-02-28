import React from 'react';
import {useSelector} from "react-redux";
import {selectAllItemsCart} from "../../store/cart/cartSlice";
import cn from './OrderPage.module.scss'
import {CartItem} from "../../components/CartItem";

const OrderPage = () => {

  const {cartList} = useSelector(state =>state.cart)

  const renderCardsList = cartList.map(item => <CartItem key={item.id} game={item}/>)
  return (
    <main>
      <section>
        <h1>OrderPage</h1>
        <div className={cn['card-list']}>
          {renderCardsList}
        </div>
      </section>
    </main>
  );
};

export default OrderPage;