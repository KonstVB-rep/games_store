import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAddRemove from '../ButtonAddRemove';
import { addProduct, selectCurrentItem } from 'store/cart/cartSlice';
import { Button } from '..';

const ButtonAddToCart = ({ game }) => {
    const dispatch = useDispatch();
    const currentItem = useSelector(selectCurrentItem(game?.id));

    const addProductInCart = (e) => {
        e.stopPropagation();
        dispatch(addProduct(game));
    };

    return (
        <>
            {!currentItem ? (
                <Button onClick={addProductInCart} className="primary" ariaLabel="Add to cart">
                    Add to Cart
                </Button>
            ) : (
                <ButtonAddRemove game={game} />
            )}
        </>
    );
};

export default ButtonAddToCart;
