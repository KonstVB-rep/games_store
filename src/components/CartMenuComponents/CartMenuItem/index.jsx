import React from 'react';

import { currency } from 'constants/currency';

import cn from './styles.module.scss';

const CartMenuItem = ({ name, totalCount, price, className }) => {
    const totalPriceGame = totalCount * price;
    return (
        <div className={`${cn.item} ${className}`}>
            <span className={cn.item__title}>{name}</span>

            <span className={cn.item__count}>{totalCount}</span>
            
            <span>
                {totalPriceGame} {currency}
            </span>
        </div>
    );
};

export default CartMenuItem;
