import React from 'react';
import {useForm} from "react-hook-form";

import cn from "../PaymentForm.module.scss";


const dateNow = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}`

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
        cardValidityPeriod: ''
      }
    }
  );

  console.log(new Date().getMonth())

  const {
    numberCard,
    name,
    ccv,
    setCcv,
    setName,
    handleSetCardNumber,
    handleFocus,
    handleBlur,
    cardValidityPeriod,
    setCardValidityPeriod,
    setShowModalPaymentForm,
    setShowConfirmModal
  } = props


  const onSubmit = () => {
    setShowModalPaymentForm(false);
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
      <label htmlFor = "" className = {cn['card-period']}>
        <input type = "month"
               value = {cardValidityPeriod}
               {...register('cardValidityPeriod', {
                 required: "The field is required",
                 onChange: (e) => setCardValidityPeriod(e.target.value),
                 min: {
                   value: dateNow,
                   message: 'You have entered incorrect date'
                 }
               })}
        />
      </label>
      <div className = {cn.error}>{errors?.cardValidityPeriod &&
        <p>{errors?.cardValidityPeriod?.message || 'you have entered incorrect date'}</p>}</div>
      <div className = {cn.error}>
        {(errors?.month || errors?.year) &&
          <p>{errors?.month?.message || errors?.year?.message || 'check and re-enter the month and year in both fields'}</p>}</div>
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