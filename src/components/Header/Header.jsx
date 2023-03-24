import React from "react";
import ShoppingCart from "../CartMenuComponents/ShoppingCart/ShoppingCart";
import NavBar from "../NavBar/NavBar";
import {ButtonSilver} from "../Buttons/ButtonSilver";
import {useLocation, useNavigate} from "react-router-dom";
import cn from "./Header.module.scss";

const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate()

  const goBack =() => navigate(-1)


  return (
    <>
      <header className = {cn.header} id = "header">
        <div className = {cn.wrapper}>
          <NavBar />
          <ShoppingCart />
        </div>
        {pathname !== '/' ? <ButtonSilver title='go back' onClick={goBack} ariaLabel={'return back'}/> : null}
      </header>
    </>
  );
};

export default Header;
