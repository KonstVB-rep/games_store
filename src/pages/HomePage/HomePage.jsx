import React from "react";
import {GamesList} from "../../components/HomePageComponents/GamesList";
import {HomePageContainer} from "../../components/HomePageComponents/HomePageContainer";
import Skeleton from "../../components/HomePageComponents/Skeleton/Skeleton";

const HomePage = () => {

  return (
    <>
      <HomePageContainer>
        <GamesList />
        <Skeleton />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
