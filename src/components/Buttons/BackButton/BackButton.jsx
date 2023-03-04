import React from 'react';
import cn from './BackButton.module.scss';

const BackButton = () => {
  return (
    <button className={cn.button}>
      <span className={cn.button__text}>go back</span>
    </button>
  );
};

export default BackButton;