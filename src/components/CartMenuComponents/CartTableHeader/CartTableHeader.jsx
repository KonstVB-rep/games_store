import React from 'react';

const CartTableHeader = ({classname}) => {
  return (
    <div className = {classname}>
      <span>name</span>
      <span>quantity</span>
      <span >amount</span>
    </div>
  );
};

export default CartTableHeader;