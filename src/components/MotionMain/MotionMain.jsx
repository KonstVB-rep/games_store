import React from 'react';
import {motion} from "framer-motion";

const opacity ={opacity: 0};
const opacityNo ={opacity: 1}
const transition = {duration: 0.75, ease: 'linear'}

const MotionMain = ({classname = '', children}) => {

  return (
      <motion.main
        className = {classname}
        initial = {opacity}
        animate = {opacityNo}
        transition = {transition}
      >
        {children}
      </motion.main>
  );
};

export default MotionMain;