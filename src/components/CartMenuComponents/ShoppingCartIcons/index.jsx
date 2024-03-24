import React from 'react';
import { useSelector } from 'react-redux';

import SHOPPING_CART from 'assets/shopping-cart.svg';
import { currency } from 'constants/currency';
import cn from './styles.module.scss';

const TotalPrice = () => {
    const { totalPrice, cartList } = useSelector((state) => state.cart);

    return (
        <span className={cn['total-price']} data-count={cartList.length}>
            {totalPrice} {currency}
        </span>
    );
};

const ShoppingCartIcons = ({ setShowCart }) => {
    return (
        <>
            <div className={cn['cart__info']}>
                <TotalPrice />
                <button className={cn['btn-toggle']} onClick={() => setShowCart((prev) => !prev)}>
                    <img
                        src={SHOPPING_CART}
                        className={cn['btn-toggle__icon']}
                        alt="Show/hide the contents of the cart"
                    />
                </button>
            </div>
        </>
    );
};

export default ShoppingCartIcons;
