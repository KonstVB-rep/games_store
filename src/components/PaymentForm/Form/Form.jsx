import React from 'react';
import {Input} from '../Input';
import {Select} from "../Select";
import cn from "../PaymentForm.module.scss";

const Form = ({
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
              }) => {


  const handlerSubmit = (event) => {
    event.preventDefault();
    setShowModal(false)
    setShowConfirmModal(true)
  }

  const renderOptionMonths = Array(12)
    .fill(0)
    .map((item, index) => <option key = {index} value = {`${index + 1}`.padStart(2, '0')}>{`${index + 1}`.padStart(2, '0')}</option>)

  const renderOptionYears = Array(10)
    .fill(new Date()
    .getFullYear())
    .map((item, index) => <option key = {index} value = {`${item + index}`}>{`${item + index}`}</option>)


  return (
    <form onSubmit={handlerSubmit}>
      <Input type = "tel" inputMode = "numeric" pattern = "[\d| ]{19}"
             autoComplete = "cc-number"
             maxLength = "19"
             value = {numberCard}
             className = {cn.number}
             onChange = {handleSetCardNumber}
             placeholder = {'xxxx xxxx xxxx xxxx'}
             label = "Number card"
      />
      <p className = {cn['valid-title']}>valid thru</p>
      <div className = {cn['valid-wrapper']}>
        <div className = {cn['selects-wrapper']}>
          <Select period = {month} onChange = {setMonth} name="month" renderItems={renderOptionMonths}/>
          <Select period = {year} onChange = {setYear} name='year' renderItems={renderOptionYears}/>
        </div>
      </div>
      <Input type = "text" className = {cn.name} inputMode = "text" placeholder = "name" value = {name}
             onChange = {(e) => setName(e.target.value)} />
      <Input type = "text" className = {cn.ccv} inputMode = "numeric" maxLength = "3" placeholder = "ccv"
             value = {ccv} onChange = {(e) => setCcv(e.target.value)} onFocus = {handleFocus}
             onBlur = {handleBlur} />
      <button title = "Pay" onSubmit={handlerSubmit} className={cn['btn-submit']} type='submit'>
        pay
      </button>
    </form>
  );
};

export default Form;