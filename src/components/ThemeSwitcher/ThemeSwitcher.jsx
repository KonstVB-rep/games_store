import React, {useLayoutEffect, useState} from 'react';
import {BiMoon} from "react-icons/bi";
import {CgSun} from "react-icons/cg";
import cn from './ThemeSwitcher.module.scss'


const themeFromLs = localStorage.getItem('theme') || 'dark'

const ThemeSwitcher = () => {

  const [theme, setTheme] = useState(themeFromLs);

  const ThemeIcon = theme === 'dark' ? CgSun : BiMoon;
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useLayoutEffect(() => {
    const bgBody = `var(--bg-body-${theme}`
    const colorMain = `var(--color-main-${theme}`
    const colorSecondary = `var(--color-secondary-${theme}`;
    document.body.style.setProperty('--bg-body',bgBody)
    document.body.style.setProperty('--color-main',colorMain)
    document.body.style.setProperty('--color-secondary',colorSecondary)
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <div className={cn.switcher} onClick={toggleTheme}>
      <ThemeIcon className={cn.icon} />
    </div>
  );
};

export default ThemeSwitcher;

