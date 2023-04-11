import React from "react";

import cn from './Spinner.module.scss'

const Spinner = () => {
    return <img src="/Spinner.svg" alt="Загрузка"  className={cn.spinner}/>
};

export default Spinner;
