import React from 'react';
import cn from './ButtonSilver.module.scss';

const ButtonSilver = ({title, classname = '', ariaLabel, onClick}) => {

  return (
   <div className={`${cn.wrapper} ${classname}`}>
     <button className={cn.button} onClick={onClick} aria-label={ariaLabel} >
       {title}
     </button>
   </div>
  );
};

export default ButtonSilver;