import React from 'react';
import {motion} from "framer-motion";

const MotionMain = ({classname = '', children}) => {

  return (
      <motion.main
        className = {classname}
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{duration: 0.75, ease: 'linear'}}
      >
        {children}
      </motion.main>
  );
};

export default MotionMain;