import React from 'react';
import {RiMenu5Fill} from "react-icons/ri";
import {IoClose} from "react-icons/io5";
import cn from "../Header/Header.module.scss";

const BurgerButton = ({isShow, setIsShow}) => {

  const handleMobileMenu = () => {
    setIsShow((p) => !p);
  };

  return (
    <button
      tabIndex={0}
      className={cn["button-burger"]}
      onClick={handleMobileMenu}
    >
      {!isShow ? (
        <RiMenu5Fill className={cn.burger} />
      ) : (
        <IoClose className={cn.burger} />
      )}
    </button>
  );
};

export default BurgerButton;