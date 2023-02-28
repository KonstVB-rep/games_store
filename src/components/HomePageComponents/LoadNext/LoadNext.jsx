import {useSelector} from "react-redux";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const LoadNext = () => {

  const {status} = useSelector(state => state.games);

  return (
    <>
      {status === "loading" && <Skeleton />}
    </>
  )
};
export default LoadNext;