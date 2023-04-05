import {useState} from 'react';
import {normalizeCardNumber} from "../../../../utils/normalizeCardNumber";

const usePayment = () => {

  const [numberCard, setNumberCard] = useState('');
  const [month, setMonth] = useState('month');
  const [year, setYear] = useState('year');
  const [name, setName] = useState('');
  const [ccv, setCcv] = useState('');
  const [turnClass, setTurnCLass] = useState('');

  const handleFocus = () => {
    setTurnCLass('turned')
  }

  const handleBlur = () => {
    setTurnCLass('')
  }

  const handleSetCardNumber = (event) => {
    const {value} = event.target
    event.target.value = normalizeCardNumber(value)
    setNumberCard(event.target.value)
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