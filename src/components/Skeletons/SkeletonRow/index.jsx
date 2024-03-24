import React from 'react';
import cn from './styles.module.scss';

const SkeletonRow = ({ property }) => {
    return <div className={cn['skeleton-row']} style={{ ...property }}></div>;
};

export default SkeletonRow;
