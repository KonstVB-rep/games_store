import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { currency } from 'constants/currency';
import { selectCurrentItem } from 'store/cart/cartSlice';
import { ButtonAddRemove } from 'components/ui/Buttons';

import cn from './styles.module.scss';

const CartItem = memo(({ id }) => {
    const game = useSelector(selectCurrentItem(id));

    return (
        <div className={cn.card}>
            <div className={cn.poster}>
                <img src={game.img} className={cn.poster__img} loading="lazy" alt="" />
            </div>

            <div className={cn.title}>
                <Link to={`/games/${game.slug}`} title="Go to the game page">
                    {game.name}
                </Link>
            </div>

            <ButtonAddRemove game={game} />

            <div className={cn.price}>
                {game.totalCount * game.price} {currency}
            </div>
        </div>
    );
});

export default CartItem;
