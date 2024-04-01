import { useSelector } from 'react-redux';

import { selectTotalPrice } from 'store/cart/cartSlice';

import { currency } from 'constants/currency';

import cn from './styles.module.scss';

const CartTableFooter = () => {
    const totalPriceCart = useSelector(selectTotalPrice);

    return (
        <div className={cn.total}>
            <span>Total price:</span>

            <span>
                {totalPriceCart} {currency}
            </span>
        </div>
    );
};

export default CartTableFooter;
