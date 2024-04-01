import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import CartMenuList from '../CartMenuList';
import CartTableFooter from '../CartTableFooter';

import cn from './styles.module.scss';

const CartMenu = ({ showCart, setShowCart }) => {
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {showCart && (
                <motion.div
                    className={cn.menu}
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: '-100%', opacity: 0 }}
                >
                    <CartMenuList />

                    <CartTableFooter />

                    <button
                        className={cn['go-cart']}
                        onClick={() => {
                            navigate('/cart');
                            setShowCart(false);
                        }}
                    >
                        Go to the cart
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CartMenu;
