import React from "react";
import cn from "./Button.module.scss";

const Button = ({ children, onClick, classname }) => {

  return (
    <button className={`${cn.btn} ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
