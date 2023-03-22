import React from "react";
import cn from "./Button.module.scss";

const Button = (props) => {
  const { children, classname, ...restProps} = props
  return (
    <button className={`${cn.btn} ${classname}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
