import React, {forwardRef} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../Buttons/Button";
import FooterCartTable from "../FooterCartTable/FooterCartTable";
import {HeaderCartTable} from "../HeaderCartTable";
import {CartMenuList} from "../CartMenuList";
import cn from "./CartMenu.module.scss";

const CartMenu = forwardRef(function CartMenu({classname}, ref) {

  return(
    <div className = {classname} ref = {ref}>
      <CartMenuList classname = {cn.orders}>
        <HeaderCartTable classname = {cn.grid}/>
      </CartMenuList>
      <FooterCartTable classname = {cn.total}/>
      <Link to = "order" >
        <Button classname = {cn.btn_cart} >Go to the shopping cart</Button>
      </Link>
    </div>
  )
});

export default CartMenu;
