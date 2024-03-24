import React from 'react';
import { motion } from 'framer-motion';

const opacity = { opacity: 0 };
const opacityNo = { opacity: 1 };
const transition = { duration: 0.75, ease: 'linear' };

const MotionContainer = ({ className = '', children }) => {
    return (
        <>
            <motion.div
                className={className}
                initial={opacity}
                animate={opacityNo}
                transition={transition}
            >
                {children}
            </motion.div>
        </>
    );
};

export default MotionContainer;
