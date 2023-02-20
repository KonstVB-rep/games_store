import React from "react";
import cn from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <header className={cn.header} id="header">
      <div className={cn.wrapper}>
        <nav className={cn.nav}>
          <NavLink to="/">GameStore</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="users">Users</NavLink>
        </nav>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
