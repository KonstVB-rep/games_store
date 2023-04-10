import React, {useLayoutEffect, useState} from 'react';

import cn from './ThemeSwitcher.module.scss'


const themeFromLs = localStorage.getItem('theme') || 'dark'

const ThemeSwitcher = () => {

  const [theme, setTheme] = useState(themeFromLs);

  const ThemeIcon = theme === 'dark' ? '/sun_icon.svg' : '/moon_icon.svg';
  const themeClass = theme === 'dark' ? 'light' : 'dark';
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
      <img src={ThemeIcon} className={`${cn.icon} ${cn[themeClass]}`} alt='Switch Theme'/>
    </div>
  );
};

export default ThemeSwitcher;

