import React from 'react';
import cn from './ArrowThemeBox.module.scss'
import {ArrowTop} from "../ArrowTop";
import {ThemeSwitcher} from "../ThemeSwitcher";

const ArrowThemeBox = () => {
  return (
    <div className={cn.wrapper}>
     <div className={cn.wrapper__arrow}>
       <ArrowTop/>
     </div>
      <ThemeSwitcher/>
    </div>
  );
};

export default ArrowThemeBox;