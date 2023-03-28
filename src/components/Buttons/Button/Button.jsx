import React from "react";
import cn from "./Button.module.scss";

const Button = (props) => {
  const { children, classname='',ariaLabel, ...restProps} = props;

  return (
    <button className={`${cn.btn} ${cn[`${classname}`]}`} aria-label={ariaLabel} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
