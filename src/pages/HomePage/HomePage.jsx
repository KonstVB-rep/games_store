import React from "react";
import GamesList from "../../components/HomePageComponents/GamesList/GamesList";
import {LoadNext} from "../../components/HomePageComponents/LoadNext";
import HomePageContainer from "../../components/HomePageComponents/HomePageContainer/HomePageContainer";

const HomePage = () => {

  return (
    <HomePageContainer>
      <GamesList />
      <LoadNext />
    </HomePageContainer>
  );
};

export default HomePage;
