import React from 'react';
import cn from "../PaymentForm.module.scss";

const Select = ({period, onChange, renderItems, name}) => {

  return (
    <select name = {name} className = {cn.select} value = {period}
            onChange = {(e) => onChange(e.target.value)}>
      <option value = {name} disabled>{name}</option>
      {renderItems}
    </select>
  );
};

export default Select;