import React from 'react';
import { motion } from "framer-motion";

const MotionMain = ({classname = '', children}) => {
  return (
    <motion.main className = {classname}
                 initial={{ opacity: 0, scale: 0, y: 1000 }}
                 transition = {{opacity: {delay:0.2,duration: 0.5, ease: 'linear'},scale: {duration: 0.2, ease: 'linear'}}}
                 animate={{ opacity: 1,scale: 1 , y: 0}}>
      {children}
    </motion.main>
  );
};

export default MotionMain;