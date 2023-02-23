import React from 'react';
import cn from './SkeletonSinglePage.module.scss'
import {useSelector} from "react-redux";

const SkeletonSinglePage = ({children}) => {
  const { status } = useSelector(state=> state.singleGame);
  return (
    <>
      {status === "loading" ? <div className={cn.skeleton}/> : status === "fulfilled" && children}
    </>
  );
};

export default SkeletonSinglePage;