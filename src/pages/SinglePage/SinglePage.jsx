import React from "react";
import {Await, useLoaderData} from "react-router-dom";
import {PATH} from "../../constants/api";
import {getData} from "../../utils/getData";
import {transformDataItem} from "../../utils/transformData";
import {GameInfo} from "../../components/SinglePageComponents/GameInfo";
import {MotionMain} from "../../components/MotionMain";
import cn from "./SinglePage.module.scss";


const SinglePage = () => {
  const {game} = useLoaderData()

  return (
    <main classname = {cn.game}>
          <Await resolve={game}>
            <GameInfo/>
          </Await>
    </main>
  );
};


export const singlePageLoader = async ({_, params}) => {
  const {name} = params;
  return {
    game: getData(PATH.SINGLE_GAME_URL(name), transformDataItem),
  }
}

export default SinglePage;

