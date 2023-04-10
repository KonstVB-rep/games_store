import React from "react";

import {GamesList} from "../../components/MainPageComponents/GamesList";
import {MainPageContainer} from "../../components/MainPageComponents/MainPageContainer";
import Skeleton from "../../components/MainPageComponents/Skeleton/Skeleton";

const MainPage = () => {

  return (
    <>
      <MainPageContainer>
        <GamesList />
        <Skeleton />
      </MainPageContainer>
    </>
  );
};

export default MainPage;
