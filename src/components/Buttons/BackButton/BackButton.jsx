import React from 'react';
import cn from './BackButton.module.scss';
import {useNavigate} from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate()

  const goBack =() => navigate(-1)

  return (
   <div className={cn.wrapper}>
     <button className={cn.button} onClick={goBack}>
       <span className={cn.button__text}>go back</span>
     </button>
   </div>
  );
};

export default BackButton;