import React, {useEffect} from "react";
import {useLoaderData} from "react-router-dom";
import {PATH} from "../../constants/api";
import {MediaContent} from "../../components/SinglePageComponents/MediaContent";
import {TextContent} from "../../components/SinglePageComponents/TextContent";
import PlatformsLIst from "../../components/SinglePageComponents/PlatformsLIst/PlatformsLIst";
import SkeletonSinglePage from "../../components/SinglePageComponents/SkeletonSinglePage/SkeletonSinglePage";
import cn from "./SinglePage.module.scss";
import {getData} from "../../utils/getData";
import {transformDataItem} from "../../utils/transformData";

const SinglePage = () => {
  const game = useLoaderData()

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[]);

  return (
    <section className={cn.game}>
        {/*<SkeletonSinglePage >*/}
          <div className={cn.wrapper}>
            <h1 className={cn.title}>{game.name}</h1>
            <MediaContent img ={game.img}/>
            <PlatformsLIst platforms={game.platforms} reddit={game.reddit} website={game.website}/>
            <TextContent game={game}/>
          </div>
        {/*</SkeletonSinglePage>*/}
    </section>
  );
};


export const singlePageLoader = async ({request, params}) => {
  const {name} = params;
  return await getData(PATH.SINGLE_GAME_URL(name), transformDataItem);
}

export default SinglePage;
