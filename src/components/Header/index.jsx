import React from 'react';

import { ShopingCart } from 'components/CartMenuComponents';
import NavBar from 'components/NavBar';
import { Button } from 'components/ui/Buttons';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

import cn from './styles.module.scss';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <>
            <header className={cn.header} id="header">
                <div className="container">
                    <div className={cn.wrapper}>
                        <NavBar />

                        <ShopingCart />
                    </div>
                </div>
            </header>
            {!pathname.includes('games_store') ? (
                <Button title="go back" className="back" onClick={goBack} ariaLabel={'return back'}>
                    <MdArrowBackIosNew size={30} />
                </Button>
            ) : null}
        </>
    );
};

export default Header;
