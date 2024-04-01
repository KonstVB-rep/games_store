import React, { Suspense } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PortalCreator from 'components/PortalCreator';
import { ArrowTop } from 'components/ui/Buttons';
import ScrollToTop from 'components/ui/ScrollToTop';
import Spinner from 'components/ui/Spinner';
import ThemeSwitcher from 'components/ui/ThemeSwitcher';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="app">
                <Header />
                <ScrollToTop>
                    <Suspense fallback={<Spinner />}>
                        <Outlet />
                    </Suspense>
                </ScrollToTop>
                <PortalCreator>
                    <ArrowTop />
                </PortalCreator>
                <PortalCreator>
                    <ThemeSwitcher />
                </PortalCreator>
                <Footer />
            </div>
        </>
    );
}

export default App;
