import React, {useEffect, useState} from "react";
import cn from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <header className={cn.header}>
      <div className={cn.wrapper}>
        <nav className={cn.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active_link" : "")}
          >
            GameStore
          </NavLink>
          <NavLink
            to="search"
            className={({ isActive }) => (isActive ? "active_link" : "")}
          >
            Search games
          </NavLink>
          <NavLink
            to="order"
            className={({ isActive }) => (isActive ? "active_link" : "")}
          >
            Users
          </NavLink>
        </nav>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
