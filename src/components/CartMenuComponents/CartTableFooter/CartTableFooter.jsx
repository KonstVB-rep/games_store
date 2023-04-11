import React from 'react';
import {useSelector} from "react-redux";

import {currency} from "constants/currency";
import {selectTotalPrice} from "store/cart/cartSlice";

const CartTableFooter = ({classname}) => {

  const totalPriceCart = useSelector(selectTotalPrice);

  return (
    <div className={classname}>
      <span>Total price:</span>
      <span>
        {totalPriceCart} {currency}
      </span>
    </div>
  );
};

export default CartTableFooter;