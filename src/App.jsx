import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PortalCreator from 'components/PortalCreator';
import ScrollToTop from 'components/ui/ScrollToTop';
import { ArrowThemeBox } from 'components/ui/Buttons';
import Spinner from 'components/ui/Spinner';

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
                    <ArrowThemeBox />
                </PortalCreator>
                <Footer />
            </div>
        </>
    );
}

export default App;
