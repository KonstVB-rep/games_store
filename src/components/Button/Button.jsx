import React from "react";
import cd from "./Button.module.scss";

const Button = ({ children, onClick }) => {
  return (
    <button className={cd.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
