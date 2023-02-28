import React from 'react';
import cn from './Skeleton.module.scss'

const skeletonsCount = Array(6).fill(1);

const Skeleton = () => {

  return (
    <div className={cn.skeleton}>
      {skeletonsCount.map((item, i) =>
        <div key={i} className={cn.skeleton__item}/>
      )}
    </div>
  );
};

export default Skeleton;