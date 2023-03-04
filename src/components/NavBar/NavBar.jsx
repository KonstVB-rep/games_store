import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {RiMenu5Fill} from "react-icons/ri";
import {IoClose} from "react-icons/io5";
import cn from "../Header/Header.module.scss";

const pathLink = [
  {path: '/', title: 'GameStore'},
  {path: 'search', title: 'Search games'},
  {path: 'favorites', title: 'Favorites'},
]


const NavBar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setOpenMobileMenu(p => !p)
  }

  const mobileClassName = openMobileMenu ? cn.nav_mobile : null;


  const pathNavLink = pathLink.map((item => <NavLink
    key = {item.path}
    to = {item.path}
    className = {({isActive}) => (isActive ? `${cn.link} ${cn.active_link}` : `${cn.link}`)}
    onClick = {() => setOpenMobileMenu(false)}
  >
    {item.title}
  </NavLink>))

  return (
    <>
      <div className={cn['wrapper-burger']}>
        {!openMobileMenu ? <RiMenu5Fill className = {cn.burger} tabIndex = "0" onClick = {handleMobileMenu} />
          : <IoClose className = {cn.burger} tabIndex = "0" onClick = {handleMobileMenu} />}
      </div>
      <nav className = {`${cn.nav} ${mobileClassName}`}>
        {pathNavLink}
      </nav>
    </>
  );
};

export default NavBar;