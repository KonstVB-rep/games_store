import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import useVisible from "../../hooks/useVisible";
import {pathLink} from "../../utils/pathLinks";
import cn from "../Header/Header.module.scss";

const NavBar = () => {
  const [isShow, setIsShow] = useVisible();

  const handleMobileMenu = () => {
    setIsShow((p) => !p);
  };

  const mobileClassName = isShow ? cn.nav_mobile : null;

  const pathNavLink = pathLink.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        isActive ? `${cn.link} ${cn.active_link}` : `${cn.link}`
      }
      onClick={() => setIsShow(false)}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <>
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
      <nav className={`${cn.nav} ${mobileClassName}`}>{pathNavLink}</nav>
    </>
  );
};

export default NavBar;
