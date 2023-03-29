import React from "react";
import { useSelector} from "react-redux";
import {selectCurrentItem,} from "../../../store/cart/cartSlice";
import {DelInCart} from "./DelInCart";
import {AddInCart} from "./AddInCart";
import cn from "./ButtonAddRemove.module.scss";


const ButtonAddRemove = ({id}) => {

  const currentGame = useSelector(selectCurrentItem(id))

  return (
    <div className = {cn.wrapper}>
      <DelInCart id={id}/>
      <span className = {cn.total}>{currentGame.totalCount}</span>
      <AddInCart id={id}/>
    </div>
  );
};

export default ButtonAddRemove;
