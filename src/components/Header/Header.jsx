import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

import ShoppingCart from "../CartMenuComponents/ShoppingCart/ShoppingCart";
import NavBar from "../NavBar/NavBar";
import {Button} from "../Buttons/Button";

import cn from "./Header.module.scss";


const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate()

  const goBack = () => navigate(-1)


  return (
    <>
      <header className = {cn.header} id = "header">
        <div className = {cn.wrapper}>
          <NavBar />
          <ShoppingCart />
        </div>
        {pathname !== '/' ? <Button title='go back' classname= 'silver' onClick={goBack} ariaLabel={'return back'}>go back</Button> : null}
      </header>
    </>
  );
};

export default Header;
