import React from 'react';

import { FaCarSide, FaLaptop } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { GrDocumentVerified } from 'react-icons/gr';
import { IoWalletOutline } from 'react-icons/io5';
import { LuBadgePercent, LuMessagesSquare } from 'react-icons/lu';
import { PiMedalLight } from 'react-icons/pi';

import cn from './styles.module.scss';

const d = [
    {
        icon: <FaCarSide size={40} />,
        text: 'Digital goods in a wide range with instant delivery',
    },
    {
        icon: <PiMedalLight size={40} />,
        text: 'Licensed games ',
    },
    {
        icon: <GrDocumentVerified size={40} />,
        text: 'Quality assurance for any product groups',
    },
    {
        icon: <IoWalletOutline size={40} />,
        text: 'Many convenient and secure payment methods',
    },
    {
        icon: <LuBadgePercent size={40} />,
        text: 'Numerous promotions and bonuses for customers',
    },
    {
        icon: <LuMessagesSquare size={40} />,
        text: 'Social media communication with like-minded people',
    },
    {
        icon: <GiMoneyStack size={40} />,
        text: 'For the incredulous, a test purchase for 1 dollar',
    },
    {
        icon: <FaLaptop size={40} />,
        text: 'New developments in the gaming industry',
    },
];

const About = () => {
    return (
        <div className={cn.about}>
            <h1 className={cn.title}>Information about the project</h1>
            <p className={cn.text}>
                A long time ago, more than 12 years ago, it was extremely difficult to find the
                right game, game console or gaming accessories, and indeed everything related to
                games. This required days of dancing with tambourines, had to scour a variety of
                sites or spend a lot of time and effort running around 1,001 stores. Tired of the
                imperfections of this mortal world, we created a "Game store". Since then,
                everything a gamer needs is in one place and is available 24 hours, 7 days a week,
                365 days a year. Buying games has become easy and fast! Do you need a game
                activation key or a recharge card with instant delivery? You are welcome! Or maybe
                you want a collector's edition of your favorite game or a novelty from the world of
                video games? We will provide! Do you want a new console? Contact us! I decided to
                pamper my console with new accessories – now you know where to look for them!
            </p>
            <p className={cn.text}>
                {' '}
                Controllers, handlebars, headphones – in general, everything you might need, and
                even a little more. That was our idea. And we have implemented it 100%.
            </p>
            <h2 className={cn.title}>From us to gamers</h2>
            <div className={cn['about-grid']}>
                {d.map((item, index) => (
                    <div className={cn['about-grid__item']} key={index}>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
