import React, {forwardRef} from "react";
import cn from './Spinner.module.scss'

const Spinner = forwardRef(function Spinner(props, ref) {
    return <img src="/Spinner.svg" alt="Загрузка" ref={ref} className={cn.spinner}/>
});

export default Spinner;
