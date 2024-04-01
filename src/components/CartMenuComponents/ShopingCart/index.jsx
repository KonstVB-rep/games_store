import { useRef, useState } from 'react';

import { useKeyDown } from 'hooks/useKeyDown';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useLocation } from 'react-router-dom';

import CartMenu from '../CartMenu';
import ShoppingCartIcons from '../ShoppingCartIcons';

import cn from './styles.module.scss';

const ShoppingCart = () => {
    const ref = useRef(null);
    const [showCart, setShowCart] = useState(false);
    const { pathname } = useLocation();

    useOutsideClick(ref, () => setShowCart(false), showCart);
    useKeyDown('Escape', () => setShowCart(false), showCart);

    if (pathname === '/cart') return null;

    return (
        <div className={cn.cart} ref={ref}>
            <ShoppingCartIcons setShowCart={setShowCart} />

            <CartMenu showCart={showCart} setShowCart={setShowCart} />
        </div>
    );
};

export default ShoppingCart;
