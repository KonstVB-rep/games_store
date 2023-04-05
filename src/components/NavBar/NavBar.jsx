import React from "react";
import useVisible from "../../hooks/useVisible";
import {NavList} from "../NavList";
import {BurgerButton} from "../Buttons/BurgerButton";

const NavBar = () => {
  const [isShow, setIsShow] = useVisible();


  return (
    <>
      <BurgerButton isShow={isShow} setIsShow={setIsShow}/>
      <NavList isShow={isShow} setIsShow={setIsShow}/>
    </>
  );
};

export default NavBar;
