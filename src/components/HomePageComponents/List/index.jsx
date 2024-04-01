import React from 'react';

import Card from '../Card';

import cn from './styles.module.scss';

const List = ({ data, title }) => {
    return (
        <>
            <div className={cn.list}>
                <h2 className={cn.title}>{title}</h2>
                <div className={cn.games}>
                    {data?.map((game) => (
                        <Card game={game} key={game.id} />
                    ))}
                </div>
            </div>
            <hr />
        </>
    );
};

export default List;
