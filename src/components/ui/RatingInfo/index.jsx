import React from 'react';

import cn from './styles.module.scss';

const RatingInfo = ({ rating, ratingsCount, released, className = '' }) => {
    return (
        <div className={`${cn['rating-box']} ${className}`}>
            <p>
                <span>Rating</span>
                <span className={cn.rating}>{rating}</span>
            </p>
            <p>
                <span>Ratings count</span>
                <span className={cn.rating}>{ratingsCount}</span>
            </p>
            <p>
                <span>Release date</span>
                <span>{released}</span>
            </p>
        </div>
    );
};

export default RatingInfo;
