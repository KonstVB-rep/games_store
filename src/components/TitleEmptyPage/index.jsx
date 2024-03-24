import React from 'react';

import cn from "./styles.module.scss";

const TitleEmptyPage = ({text}) => {
  return (
    <>
      <h1 className = {cn.title}>{text}</h1>
    </>
  );
};

export default TitleEmptyPage;