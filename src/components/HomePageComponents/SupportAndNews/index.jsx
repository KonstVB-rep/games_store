import React from 'react';

import cn from './styles.module.scss';

const SupprtAndNews = () => {
    return (
        <div className={cn.section}>
            <div className={cn['section-item']}>
                <h4 className={cn['section-item__title']}>Support and assistance</h4>
                <p className={cn['section-item__text']}>
                    If you have any questions, difficulties with placing an order or something else,
                    feel free to contact us. We work around the clock. And even if in the excitement
                    you ordered a completely different key that you originally wanted, we will try
                    to fix the situation.
                </p>
            </div>
            <div className={cn['section-item']}>
                <h4 className={cn['section-item__title']}>News, articles and reviews</h4>
                <p className={cn['section-item__text']}>
                    Knowledge is power! Do you want to always keep up to date with the events of the
                    gaming industry? Take a look at our blog, which contains gigabytes of useful
                    information and the latest reviews of the latest novelties, as well as current
                    news.
                </p>
            </div>
            <div className={cn['section-item']}>
                <h4 className={cn['section-item__title']}>Guarantee of reliability</h4>
                <p className={cn['section-item__text']}>
                    Only quality, only hardcore! The best of the best publishers and authorized
                    dealers, proven by years of cooperation, supply us with licensed products from
                    Activision, Blizzard, Microsoft, Ubisoft, Sega, Novy Disk, SoftClub, Sony, Buka
                    and many others.
                </p>
            </div>
            <div className={cn['section-item']}>
                <h4 className={cn['section-item__title']}>Choose quickly, just pay</h4>
                <p className={cn['section-item__text']}>
                    Choosing a product has become easier than ever. Convenient filters, sorting by
                    genre, prices, developers and other parameters. Have you chosen? Pay in any
                    convenient way – we have more than enough of them:
                </p>
            </div>
        </div>
    );
};

export default SupprtAndNews;
