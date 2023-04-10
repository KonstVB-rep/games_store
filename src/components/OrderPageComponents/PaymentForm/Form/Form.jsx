import React from 'react';
import {useForm} from "react-hook-form";

import cn from "../PaymentForm.module.scss";

import {renderOptionMonths, renderOptionYears} from "./renderOptions";


const Form = (props) => {
  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset,
  } = useForm({
      mode: 'onBlur',
      defaultValues: {
        cardNumber: '',
        name: '',
        ccv: '',
        month: '',
        year: ''
      }
    }
  );

  const {
    numberCard,
    name,
    month,
    ccv,
    setCcv,
    setMonth,
    setYear,
    setName,
    handleSetCardNumber,
    handleFocus,
    handleBlur,
    setShowModal,
    setShowConfirmModal
  } = props


  const onSubmit = () => {
    setShowModal(false);
    setShowConfirmModal(true);
    reset();
  }

  const setNameField = (e) => {
    let value = e.target.value.replace(/[^a-zA-Z]+/g, '')
    setName(value)
  }

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <label htmlFor = "">
        <input type = "tel"
               inputMode = "numeric"
               autoComplete = "cc-number"
               value = {numberCard}
               placeholder = {'xxxx xxxx xxxx xxxx'}
               {...register('cardNumber', {
                 required: "The field is required",
                 onChange: handleSetCardNumber,
                 maxLength: {
                   value: 19,
                   message: 'The card number must contain 16 digits'
                 },
                 minLength: {
                   value: 19,
                   message: 'The card number must contain 16 digits'
                 },
                 pattern: {
                   value: /[\d| ]{19}/,
                   message: 'Only numbers are allowed for this field'
                 }
               })}
        />
      </label>
      <div className = {cn.error}>{errors?.cardNumber &&
        <p>{errors?.cardNumber?.message || 'you have entered incorrect data'}</p>}</div>
      <p className = {cn['valid-title']}>valid thru</p>
      <div className = {cn['selects-wrapper']}>
        <select
          className = {cn.select}
          {...register('month', {
            required: "The field month is required",
            onChange: (e) => setMonth(e.target.value),
            validate: {
              positive: () => parseInt(month) > new Date().getMonth(),
            },
            pattern: {
              value: /[\d| ]{2}/,
              message: 'select a month'
            }
          })}
        >
          <option value = "" disabled>month</option>
          {renderOptionMonths}
        </select>
        <select
          className = {cn.select}
          {...register('year', {
            required: "The field year is required",
            onChange: (e) => setYear(e.target.value),
            pattern: {
              value: /[\d| ]{4}/,
              message: 'select a year'
            }
          })}
        >
          <option value = "" disabled>year</option>
          {renderOptionYears}
        </select>
      </div>
      <div className = {cn.error}>
        {(errors?.month || errors?.year) && <p>{(errors?.year?.message) || 'you have entered incorrect data'}</p>}</div>
      <label htmlFor = "">
        <input type = "text"
               inputMode = "text"
               value = {name}
               placeholder = "name"
               {...register('name', {
                 required: "The field is required",
                 onChange: setNameField,
                 minLength: {
                   value: 2,
                   message: 'The name field must contain more than 2 character'
                 },
                 pattern: {
                   value: /[a-zA-Z]/,
                   message: 'Only Latin characters are allowed'
                 }
               })}
        />
      </label>
      <div className = {cn.error}>{errors?.name &&
        <p>{errors?.name?.message || 'you have entered incorrect data'}</p>}</div>
      <label htmlFor = "">
        <input type = "text"
               className = {cn.ccv}
               inputMode = "numeric"
               placeholder = "ccv"
               value = {ccv}
               onFocus = {handleFocus}
               {...register('ccv', {
                 required: "The field is required",
                 onChange: setCcv,
                 onBlur: handleBlur,
                 maxLength: {
                   value: 3,
                   message: 'The card number must contain 3 digits'
                 },
                 minLength: {
                   value: 3,
                   message: 'The card number must contain 3 digits'
                 },
               })}
        />
      </label>
      <div className = {cn.error}>{errors?.ccv &&
        <p>{errors?.ccv?.message || 'you have entered incorrect data'}</p>}</div>
      <button title = "Pay" onSubmit = {handleSubmit(onSubmit)} className = {cn['btn-submit']} type = "submit"
              disabled = {!isValid}>
        pay
      </button>
    </form>
  );
};

export default Form;