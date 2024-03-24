import React, { useRef } from 'react';

import useVisible from '../../hooks/useVisible';
import NavList from 'components/NavList';
import { BurgerButton } from 'components/ui/Buttons';
import { useKeydown } from 'hooks/useKeyDown';
import { useOutsideClick } from 'hooks/useOutsideClick';

const NavBar = () => {
    const [isShow, setIsShow] = useVisible();

    const ref = useRef(null);

    useOutsideClick(ref, () => setIsShow(false), isShow);
    useKeydown('Escape', () => setIsShow(false), isShow);

    return (
        <div ref={ref}>
            <BurgerButton isShow={isShow} setIsShow={setIsShow} />

            <NavList isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default NavBar;
