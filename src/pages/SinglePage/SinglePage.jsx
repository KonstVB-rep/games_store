import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSingleGames,
  loadSingleGames,
} from "../../store/games/singleGameSlice";
import { PATH } from "../../constants/api";
import { MediaContent } from "../../components/SinglePageComponents/MediaContent";
import { TextContent } from "../../components/SinglePageComponents/TextContent";
import PlatformsLIst from "../../components/SinglePageComponents/PlatformsLIst/PlatformsLIst";
import SkeletonSinglePage from "../../components/SinglePageComponents/SkeletonSinglePage/SkeletonSinglePage";
import cn from "./SinglePage.module.scss";

const SinglePage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { singleGame: game } = useSelector(state => state.singleGame);

  useEffect(() => {
    dispatch(loadSingleGames(PATH.SINGLE_GAME_URL(name)));
    return () => dispatch(clearSingleGames());
  }, [dispatch,name]);

  return (
    <section className={cn.game}>
        <SkeletonSinglePage >
          <div className={cn.wrapper}>
            <h1 className={cn.title}>{game.name}</h1>
            <MediaContent />
            <PlatformsLIst />
            <TextContent/>
          </div>
        </SkeletonSinglePage>
    </section>
  );
};

export default SinglePage;
