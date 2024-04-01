import { useRef } from 'react';

import NavList from 'components/NavList';
import { BurgerButton } from 'components/ui/Buttons';
import { useKeyDown } from 'hooks/useKeyDown';
import { useOutsideClick } from 'hooks/useOutsideClick';

import useVisible from '../../hooks/useVisible';

const NavBar = () => {
    const [isShow, setIsShow] = useVisible();

    const ref = useRef(null);

    useOutsideClick(ref, () => setIsShow(false), isShow);
    useKeyDown('Escape', () => setIsShow(false), isShow);

    return (
        <div ref={ref}>
            <BurgerButton isShow={isShow} setIsShow={setIsShow} />

            <NavList isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default NavBar;
