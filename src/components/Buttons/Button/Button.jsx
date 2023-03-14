import React from "react";
import cn from "./Button.module.scss";

const Button = ({ children, onClick, classname, type='button'}) => {

  return (
    <button className={`${cn.btn} ${classname}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
