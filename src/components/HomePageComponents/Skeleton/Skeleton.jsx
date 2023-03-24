import React from 'react';
import {useSelector} from "react-redux";
import cn from './Skeleton.module.scss'

const skeletonsCount = Array(6).fill(1);

const Skeleton = () => {

  const {status} = useSelector(state => state.games);

  return (

    <>
      {status === 'loading' && <div className = {cn.skeleton}>
        {skeletonsCount.map((item, i) =>
          <div key = {i} className = {cn.skeleton__item} />
        )}
      </div>}
    </>
  );
};

export default Skeleton;