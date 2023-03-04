import React, {Suspense} from "react";
import {Await, useLoaderData} from "react-router-dom";
import {PATH} from "../../constants/api";
import SkeletonSinglePage from "../../components/SinglePageComponents/SkeletonSinglePage/SkeletonSinglePage";
import {getData} from "../../utils/getData";
import {transformDataItem} from "../../utils/transformData";
import {GameInfo} from "../../components/SinglePageComponents/GameInfo";
import cn from "./SinglePage.module.scss";

const SinglePage = () => {
  const {game} = useLoaderData()

  return (
    <main className = {cn.game}>
      <Suspense fallback = {<SkeletonSinglePage />}>
        <Await resolve={game}>
          <GameInfo/>
        </Await>
      </Suspense>
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

