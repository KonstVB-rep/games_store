import React from 'react';
import cn from "../../HomePageComponents/GameBuy/GameBuy.module.scss";
import ButtonAddRemove from "../ButtonAddRemove/ButtonAddRemove";
import {Button} from "../Button";

const ButtonBuy = ({isIncludes,addProductInCart,delProductInCart,gameId}) => {
  return (
    <>
      {!isIncludes ? (
        <Button onClick={addProductInCart} classname={cn.btn_buy}>
          В корзину
        </Button>
      ) : (
        <ButtonAddRemove
          gameId={gameId}
          addProductInCart={addProductInCart}
          delProductInCart={delProductInCart}
        />
      )}

    </>
  );
};

export default ButtonBuy;