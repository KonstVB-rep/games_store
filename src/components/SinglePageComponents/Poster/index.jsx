import React from 'react';

import NOT_IMAGE from 'assets/not-image.jpg';

import cn from './styles.module.scss';

const Poster = ({ img }) => {
    return (
        <div className={cn.poster}>
            <div className={cn['img-box']}>
                {img ? (
                    <img src={img} alt="Poster" className={cn.poster} loading="lazy" />
                ) : (
                    <img src={NOT_IMAGE} alt="Not found" loading="lazy" />
                )}
            </div>
        </div>
    );
};

export default Poster;
