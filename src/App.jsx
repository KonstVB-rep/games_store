import React, {Suspense} from 'react';
import {Outlet} from "react-router-dom";

import Header from "./components/Header/Header";
import {Footer} from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {PortalCreator} from "./components/PortalCreator";
import Spinner from "./components/Spinner";
import ArrowThemeBox from "./components/Buttons/ArrowThemeBox/ArrowThemeBox";

function App() {


  return (
    <>
      <div className = "App">
        <Header />
        <ScrollToTop>
          <Suspense fallback = {<Spinner />}>
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
