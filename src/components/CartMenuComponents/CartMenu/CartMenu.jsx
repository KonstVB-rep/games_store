import React, {forwardRef} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../Buttons/Button";
import FooterCartTable from "../FooterCartTable/FooterCartTable";
import {HeaderCartTable} from "../HeaderCartTable";
import {CartMenuList} from "../CartMenuList";
import cl from "./CartMenu.module.scss";

const CartMenu = forwardRef(function CartMenu({classname}, ref) {

  return(
    <div className = {classname} ref = {ref}>
      <CartMenuList classname = {cl.orders}>
        <HeaderCartTable classname = {cl.grid}/>
      </CartMenuList>
      <FooterCartTable classname = {cl.total}/>
      <Link to = "order" tabindex='-1'>
        <Button classname = {cl.btn_cart} >Go to the shopping cart</Button>
      </Link>
    </div>
  )
});

export default CartMenu;
