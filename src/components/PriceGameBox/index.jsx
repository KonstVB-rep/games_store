import React from 'react';

import { ButtonAddToCart } from 'components/ui/Buttons';

import { currency } from '../../constants/currency';

import cn from './styles.module.scss';

const PriceGameBox = ({ game }) => {
    return (
        <div className={cn.purchase}>
            <span className={cn.price}>
                {game.price} {currency}
            </span>

            <ButtonAddToCart game={game} />
        </div>
    );
};

export default PriceGameBox;
