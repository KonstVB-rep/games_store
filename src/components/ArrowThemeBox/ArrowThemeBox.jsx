import React from 'react';
import cn from './ArrowThemeBox.module.scss'
import {ArrowTop} from "../ArrowTop";
import {ThemeSwitcher} from "../ThemeSwitcher";

const ArrowThemeBox = () => {
  return (
    <div className={cn.wrapper}>
      <ArrowTop/>
      <ThemeSwitcher/>
    </div>
  );
};

export default ArrowThemeBox;