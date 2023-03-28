import React from 'react';
import { motion } from "framer-motion";

const MotionMain = ( {classname ='',children}) => {
  return (
    <motion.main className={classname}
                 initial={{ opacity: 0, x: 300}}
                 transition = {{opacity: {delay:0.2,duration: 0.3, ease: 'linear'}, x:{duration: 0.3, ease: 'linear'}}}
                 animate={{ opacity: 1, x :0  }}
      >
      {children}
    </motion.main>
  );
};

export default MotionMain;