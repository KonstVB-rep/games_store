import React from 'react';
import {pathNavLinks} from "../../utils/pathLinks";
import {NavLink} from "react-router-dom";
import cn from "../Header/Header.module.scss";

const NavList = ({isShow, setIsShow}) => {

  const mobileClassName = isShow ? cn.nav_mobile : null;

  const renderNavLinks = pathNavLinks.map((item) => (
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
    <nav className={`${cn.nav} ${mobileClassName}`}>{renderNavLinks}</nav>
  );
};

export default NavList;