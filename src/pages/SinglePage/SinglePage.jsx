import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentGames,
  loadCurrentGames,
} from "../../store/games/currentGameSlice";
import { PATH } from "../../constants/api";
import cn from "./SinglePage.module.scss";
import { MediaContent } from "../../components/SinglePageComponents/MediaContent";
import { TextContent } from "../../components/SinglePageComponents/TextContent";
import GameBuy from "../../components/GameBuy/GameBuy";
import Spinner from "../../components/Spinner/Spinner";

const SinglePage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { status, currentGame: game } = useSelector(
    (state) => state.singleGame
  );

  useEffect(() => {
    dispatch(loadCurrentGames(PATH.SINGLE_GAME_URL(name)));
    return () => dispatch(clearCurrentGames());
  }, []);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : (
        <>
          <h1 className={cn.title}>{game.name}</h1>
          <div className={cn.wrapper}>
            <MediaContent
              img={game.img}
              reddit={game.reddit}
              platforms={game.platforms}
              website={game.website}
            />
            <TextContent game={game} />
          </div>
        </>
      )}
    </>
  );
};

export default SinglePage;
