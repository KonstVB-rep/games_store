import {useState} from 'react';
import {normalizeCardNumber} from "../../../../utils/normalizeCardNumber";

const usePayment = () => {

  const [numberCard, setNumberCard] = useState('');
  const [month, setMonth] = useState('month');
  const [year, setYear] = useState('year');
  const [name, setName] = useState('');
  const [ccv, setValueCcv] = useState('');
  const [turnClass, setTurnCLass] = useState('');

  const handleFocus = () => {
    setTurnCLass('turned')
  }

  const handleBlur = () => {
    setTurnCLass('')
  }

  const handleSetCardNumber = (e) => {
    const {value} = e.target
    e.target.value = normalizeCardNumber(value);
    setNumberCard(e.target.value)
  }

  const setCcv = (e) => {
    let value = e.target?.value.replace(/[^\d]/g,'').slice(0,3)
    setValueCcv(value)
  }

  return {
    numberCard,
    month,
    year,
    name,
    ccv,
    turnClass,
    setNumberCard,
    setMonth,
    setCcv,
    setYear,
    setName,
    handleSetCardNumber,
    handleFocus,
    handleBlur,
  };
};

export default usePayment;