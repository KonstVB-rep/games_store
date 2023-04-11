import React from 'react';
import {useSelector} from "react-redux";

import cn from './Skeleton.module.scss'

const skeletonsCount = Array(6).fill(1);

const Skeleton = () => {

  const {status} = useSelector(state => state.games);
  return (

    <>
      {status === 'loading' && <>
        {skeletonsCount.map((item, i) =>
          <div key = {i} className = {cn.skeleton__item} />
        )}
      </>}
    </>
  );
};

export default Skeleton;