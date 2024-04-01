import React from 'react';
import { useLayoutEffect, useState } from 'react';

import MOON_ICON from '../../../assets/moon_icon.svg';
import SUN_ICON from '../../../assets/sun_icon.svg';

import cn from './styles.module.scss';

const themeFromLs = localStorage.getItem('theme') || 'dark';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(themeFromLs);

    const ThemeIcon = theme === 'dark' ? SUN_ICON : MOON_ICON;
    const themeClass = theme === 'dark' ? 'light' : 'dark';
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useLayoutEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={cn.switcher} onClick={toggleTheme}>
            <img src={ThemeIcon} className={`${cn.icon} ${cn[themeClass]}`} alt="Switch Theme" />
        </div>
    );
};

export default ThemeSwitcher;
