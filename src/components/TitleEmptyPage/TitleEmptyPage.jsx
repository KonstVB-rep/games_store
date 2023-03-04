import React from 'react';
import cn from "./TitleEmptyPage.module.scss";

const TitleEmptyPage = ({text}) => {
  return (
    <>
      <h1 className = {cn.title}>{text}</h1>
    </>
  );
};

export default TitleEmptyPage;