import React from 'react';

import {ArrowTop} from "../ArrowTop";
import {ThemeSwitcher} from "../../ThemeSwitcher";

import cn from './ArrowThemeBox.module.scss'

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