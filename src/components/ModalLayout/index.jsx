import React from 'react';
import { Dialog } from '@headlessui/react';
import MotionContainer from 'components/MotionContainer';

const ModalLayout = ({ show, setShow, children, bg, content, modal }) => {
    return (
        <Dialog open={show} onClose={() => setShow(false)} className={modal}>
            <MotionContainer
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, ease: 'linear' }}
                animate={{ opacity: 1, scale: 1 }}
                className={bg}
            >
                <Dialog.Panel className={content}>{children}</Dialog.Panel>
            </MotionContainer>
        </Dialog>
    );
};

export default ModalLayout;
