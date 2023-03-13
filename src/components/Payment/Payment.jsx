import React, {useState} from 'react';
import {Dialog} from '@headlessui/react'
import cn from './Payment.module.scss'


const Payment = ({showModal, setShowModal}) => {
  const [numberCard, setNumberCard] = useState('')


  return (
    <Dialog open = {showModal} onClose = {() => setShowModal(false)}>
      <div className = {cn.bg}>
        <Dialog.Panel className = {cn.popup}>
          <Dialog.Title className = {cn.content}>
            <div className = {cn.card}>
            </div>
            <form>
              <label>Number card
                <input type = "tel" inputMode = "numeric" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}" autoComplete = "cc-number"
                       maxLength = "19" placeholder = "···· ···· ···· ····" value={numberCard} onChange={(e) => setNumberCard(e.target.value)}/>
              </label>
              <p className = {cn['valid-title']}>valid thru</p>
              <div className = {cn['valid-wrapper']}>
                <div className = {cn['selects-wrapper']}>
                  <select name = "month" className = {cn.select} defaultValue='month'>
                    <option value = "month" disabled>month</option>
                    <option value = "01">01</option>
                    <option value = "02">02</option>
                    <option value = "03">03</option>
                    <option value = "04">04</option>
                    <option value = "05">05</option>
                    <option value = "06">06</option>
                    <option value = "07">07</option>
                    <option value = "08">08</option>
                    <option value = "09">09</option>
                    <option value = "10">10</option>
                    <option value = "11">11</option>
                    <option value = "12">12</option>
                  </select>
                  <select name = "year" className = {cn.select} defaultValue='year'>
                    <option value = "year" disabled>year</option>
                    <option value = "2023">2023</option>
                    <option value = "2024">2024</option>
                    <option value = "2025">2025</option>
                    <option value = "2026">2026</option>
                    <option value = "2027">2027</option>
                    <option value = "2028">2028</option>
                    <option value = "2029">2029</option>
                    <option value = "2030">2030</option>
                    <option value = "2031">2031</option>
                    <option value = "2032">2032</option>
                    <option value = "2033">2033</option>
                  </select>
                </div>
              </div>
              <label>
                <input type = "text" inputMode = "text" placeholder = "NAME" />
              </label>
              <label>
                <input type = "text" inputMode = "numeric" maxLength = "3" placeholder = "ccv" />
              </label>
            </form>
            <button title = "Close window" onClose = {() => setShowModal(false)}>
              Закрыть
            </button>
          </Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Payment;