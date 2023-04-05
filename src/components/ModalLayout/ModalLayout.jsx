import React from 'react';
import {Dialog} from '@headlessui/react'
import {MotionMain} from "../MotionMain";

const ModalLayout = ({show, setShow, children, bg, content, modal}) => {
  return (
      <Dialog
        open = {show}
        onClose = {() => setShow(false)} className = {modal}>
        <MotionMain
              initial={{ opacity: 0, scale: 0 }}
              transition = {{ duration: 0.5, ease: 'linear' }}
              animate={{ opacity: 1,scale: 1 }}
               classname = {bg}>
            <Dialog.Panel className = {content}>
              {children}
            </Dialog.Panel>
        </MotionMain>
      </Dialog>
  );
};

export default ModalLayout;