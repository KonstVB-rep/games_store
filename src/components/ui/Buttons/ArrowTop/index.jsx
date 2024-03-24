import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { MdArrowBackIosNew } from 'react-icons/md';

import cn from './styles.module.scss';

const ArrowTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibleArrow = () => {
        const position = document.documentElement.scrollTop;
        if (position > 1000) {
            setIsVisible(true);
        } else setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleArrow);
        return () => window.removeEventListener('scroll', handleVisibleArrow);
    });

    return (
        <>
            {isVisible && (
                <button className={cn['arrow-box']} onClick={() => scroll.scrollToTop()}>
                    <div className={cn.image}>
                        <MdArrowBackIosNew size={24} style={{ transform: 'rotate(0deg)' }} />
                    </div>
                </button>
            )}
        </>
    );
};

export default ArrowTop;
