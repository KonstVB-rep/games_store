import React from 'react';
import {currency} from "../../../constants/currency";
import {useSelector} from "react-redux";
import {selectTotalPrice} from "../../../store/cart/cartSlice";

const FooterCartTable = ({classname}) => {

  const totalPriceCart = useSelector(selectTotalPrice);

  return (
    <div className = {classname}>
      <span>Итого:</span>
      <span>
          {totalPriceCart} {currency}
        </span>
    </div>
  );
};

export default FooterCartTable;