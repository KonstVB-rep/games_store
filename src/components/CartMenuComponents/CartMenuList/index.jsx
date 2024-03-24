import { useSelector } from 'react-redux';

import CartMenuItem from '../CartMenuItem';

import cn from './styles.module.scss';

const columns = ['name', 'quantity', 'amount'];

const CartMenuList = () => {
    const allItemsInCart = useSelector((state) => state.cart.cartList);
    const renderCartItems = allItemsInCart.map((item) => (
        <CartMenuItem key={item.id} {...item} className={cn.grid} />
    ));

    return (
        <div className={cn.orders}>
            <div className={cn.grid}>
                {columns.map((col) => (
                    <span key={col}>{col}</span>
                ))}
            </div>

            {renderCartItems}
        </div>
    );
};

export default CartMenuList;
