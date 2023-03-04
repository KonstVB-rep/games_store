import React, {forwardRef} from "react";

const Spinner = forwardRef(function Spinner(props, ref) {
    return <img src="/spinner.gif" alt="Загрузка" ref={ref}/>
});

export default Spinner;
