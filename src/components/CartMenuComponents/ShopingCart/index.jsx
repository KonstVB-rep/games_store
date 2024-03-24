import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { useKeydown } from 'hooks/useKeyDown';
import ShoppingCartIcons from '../ShoppingCartIcons';
import CartMenu from '../CartMenu';

import cn from './styles.module.scss';

const ShoppingCart = () => {
    const ref = useRef(null);
    const [showCart, setShowCart] = useState(false);
    const { pathname } = useLocation();

    useOutsideClick(ref, () => setShowCart(false), showCart);
    useKeydown('Escape', () => setShowCart(false), showCart);

    if (pathname === '/cart') return null;

    return (
        <div className={cn.cart} ref={ref}>
            <ShoppingCartIcons setShowCart={setShowCart} />

            <CartMenu showCart={showCart} setShowCart={setShowCart} />
        </div>
    );
};

export default ShoppingCart;
