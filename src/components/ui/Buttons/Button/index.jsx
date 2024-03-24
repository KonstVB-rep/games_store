import React from 'react';

import cn from './styles.module.scss';

const Button = (props) => {
    const { children, className = '', ariaLabel, ...restProps } = props;

    return (
        <button className={`${cn.btn} ${cn[`${className}`]}`} aria-label={ariaLabel} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
