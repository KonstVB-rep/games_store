import React from 'react';
import cn from "../Header/Header.module.scss";

const BurgerButton = ({isShow, setIsShow}) => {

  const handleMobileMenu = () => {
    setIsShow((p) => !p);
  };

  return (
    <button
      tabIndex = {0}
      className = {cn["button-burger"]}
      onClick = {handleMobileMenu}
      aria-label="Menu"
    >
      {!isShow ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className = {cn.burger}>
            <rect width="48" height="48" fill="none" fillOpacity ="0.01" />
            <path d="M15  11.9498H32.9498" stroke="none" strokeWidth ="4" strokeLinecap ="round" strokeLinejoin ="round"/>
            <path d="M7.94977 23.9498H39.9498" stroke="none" strokeWidth ="4" strokeLinecap ="round" strokeLinejoin ="round"/>
            <path d="M15 35.9498H32.9498" stroke="none" strokeWidth ="4" strokeLinecap ="round" strokeLinejoin ="round" />
          </svg>
        // <img src = "/menu_icon.svg" className = {cn.burger} />
      ) : (

        <svg id = "Layer_1" version = "1.1" viewBox = "0 0 512 512" fill='none' className={cn.burger}>
          <path className = "st0"
                d = "M284.3,245.1l110.9-110.9c7.8-7.8,7.8-20.5,0-28.3s-20.5-7.8-28.3,0L256,216.8L145.1,105.9
                c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l110.9,110.9L116.9,355.9c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9
                c5.1,0,10.2-2,14.1-5.9L256,273.3l110.9,110.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.3,245.1z" />
        </svg>

        // <img src='/close_icon.svg' className={cn.burger} />
        )}
    </button>
  );
};

export default BurgerButton;