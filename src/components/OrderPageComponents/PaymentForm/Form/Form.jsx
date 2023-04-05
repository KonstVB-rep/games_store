import React from 'react';
import {useForm} from "react-hook-form";
import {Select} from "../Select";
import {renderOptionMonths, renderOptionYears} from "./renderOptions";
import cn from "../PaymentForm.module.scss";

const Form = (props) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } =useForm();

  const {
    numberCard,
    month,
    setMonth,
    year,
    setYear,
    name,
    setName,
    ccv,
    setCcv,
    handleSetCardNumber,
    handleFocus,
    handleBlur,
    setShowModal,
    setShowConfirmModal
  } = props


  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(data))
    setShowModal(false)
    setShowConfirmModal(true)
  }


  return (
    <form onSubmit = {onSubmit}>
      <label htmlFor = "">
        <input type = "tel" inputMode = "numeric" pattern = "[\d| ]{19}"
               autoComplete = "cc-number"
               maxLength = "19"
               value = {numberCard}
               onChange = {handleSetCardNumber}
               placeholder = {'xxxx xxxx xxxx xxxx'}
        />
      </label>
      <p className = {cn['valid-title']}>valid thru</p>
      <div className = {cn['selects-wrapper']}>
        <Select period = {month} onChange = {setMonth} name = "month">
          {renderOptionMonths}
        </Select>
        <Select period = {year} onChange = {setYear} name = "year">
          {renderOptionYears}
        </Select>
      </div>
      <label htmlFor = "">
        <input type = "text" inputMode = "text" placeholder = "name" value = {name}
               onChange = {(e) => setName(e.target.value)} />
      </label>
      <label htmlFor = "">
        <input type = "text" className = {cn.ccv} inputMode = "numeric" maxLength = "3" placeholder = "ccv"
               value = {ccv} onChange = {(e) => setCcv(e.target.value)} onFocus = {handleFocus}
               onBlur = {handleBlur} />
      </label>
      <button title = "Pay" onSubmit = {onSubmit} className = {cn['btn-submit']} type = "submit">
        pay
      </button>
    </form>
  );
};

export default Form;