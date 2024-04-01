import React from 'react';

import { Link } from 'react-router-dom';

import cn from './styles.module.scss';

const data = {
    error: {
        classBg: 'bg-error',
        subTitle: 'Try agarin later are or go to the main page',
        title: 'Ooops, something went wrong.But we are fixing it',
    },
    notFound: {
        classBg: 'bg-404',
        title: 'Sorry,page not found.',
    },
};
const ErrorPage = ({ id }) => {
    return (
        <main className={cn.main}>
            <div className={cn.wrapper}>
                <h1 className={cn.title}>{data[id].title}</h1>
                {data[id].subTitle && <p className={cn.subTitle}>{data[id].subTitle}</p>}
                <Link to="/games" className={cn.link}>
                    Go to the main page
                </Link>
                <p className={cn.text}>Or reload the page</p>
                <div className={cn[`${data[id].classBg}`]} aria-hidden={true} />
            </div>
        </main>
    );
};

export default ErrorPage;
