import React from "react";
import ShoppingCart from "../CartMenuComponents/ShoppingCart/ShoppingCart";
import NavBar from "../NavBar/NavBar";
import cn from "./Header.module.scss";

const Header = () => {

  return (
    <header className={cn.header} id='header'>
      <div className={cn.wrapper}>
        <NavBar/>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
