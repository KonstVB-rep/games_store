import React from 'react';
import cn from './ButtonSilver.module.scss';

const ButtonSilver = ({title,classname = '', click}) => {

  return (
   <div className={`${cn.wrapper} ${classname}`}>
     <button className={cn.button} onClick={click}>
       <span className={cn.button__text}>{title}</span>
     </button>
   </div>
  );
};

export default ButtonSilver;