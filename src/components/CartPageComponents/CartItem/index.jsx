import { memo } from 'react';

import { ButtonAddRemove } from 'components/ui/Buttons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurrentItem } from 'store/cart/cartSlice';

import { currency } from 'constants/currency';

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
