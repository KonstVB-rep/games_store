import React from "react";

import SPINNER_ICON from 'assets/Spinner.svg'

import cn from './Spinner.module.scss'

const Spinner = () => {
    return <img src={SPINNER_ICON} alt="Загрузка"  className={cn.spinner}/>
};

export default Spinner;
