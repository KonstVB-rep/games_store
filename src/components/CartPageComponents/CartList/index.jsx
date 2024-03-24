import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TitleEmptyPage from 'components/TitleEmptyPage';
import CartItem from '../CartItem';
import { clearCartList } from 'store/cart/cartSlice';
import { Button } from 'components/ui/Buttons';

import cn from './styles.module.scss';

const CartList = () => {
    const dispatch = useDispatch();

    const clearCart = useCallback(() => {
        dispatch(clearCartList());
    }, []);

    const { cartList } = useSelector((state) => state.cart);

    const renderCardsList = cartList.map((item) => <CartItem key={item.id} id={item.id} />);

    return (
        <section className={cn['card-list']}>
            {cartList.length ? (
                <>
                    <h1 className="visually-hidden">List of game orders</h1>
                    <div className={cn.wrapper}>{renderCardsList}</div>
                </>
            ) : (
                <TitleEmptyPage text="The shopping cart is empty" />
            )}

            {cartList.length > 0 && (
                <Button
                    title="clear cart"
                    className="silver"
                    onClick={clearCart}
                    ariaLabel="clear cart"
                >
                    clear cart
                </Button>
            )}
        </section>
    );
};

export default CartList;
