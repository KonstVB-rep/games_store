import React, {forwardRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../Buttons/Button";
import {CartMenuList} from "../CartMenuList";
import {CartTableFooter} from "../CartTableFooter";
import {CartTableHeader} from "../CartTableHeader";
import cn from "./CartMenu.module.scss";

const CartMenu = forwardRef(function CartMenu({classname,setShowCart}, ref) {
  const navigate = useNavigate()

  const handleClick = () =>{
    setShowCart(false)
    navigate('order')
  }

  return (
    <div className = {classname} ref = {ref}>
      <CartMenuList classname = {cn.orders}>
        <CartTableHeader classname = {cn.grid} />
      </CartMenuList>
      <CartTableFooter classname = {cn.total} />
        <Button classname = {cn['go-cart']} onClick={handleClick}>
          {/*<Link to = "order" onClick={() => setShowCart(false)}>*/}
            Go to the shopping cart
          {/*</Link>*/}
        </Button>
    </div>
)
});

export default CartMenu;
