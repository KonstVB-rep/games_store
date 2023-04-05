import React from 'react';
import cn from "../PaymentForm.module.scss";

const Select = ({period, onChange, children, name}) => {

  return (
    <select name = {name} className = {cn.select} value = {period}
            onChange = {(e) => onChange(e.target.value)}>
      <option value = {name} disabled>{name}</option>
      {children}
    </select>
  );
};

export default Select;