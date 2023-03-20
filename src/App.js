import React,{Suspense} from 'react';
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {ArrowTop} from "./components/ArrowTop";
import {Footer} from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import {PortalCreator} from "./components/PortalCreator";
import {ThemeSwitcher} from "./components/ThemeSwitcher";
import Spinner from "./components/Spinner";

function App() {


  return (
    <>
      <div className = "App">
        <Header />
            <ScrollToTop>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </ScrollToTop>
        <PortalCreator>
          <ArrowTop />
          <ThemeSwitcher />
        </PortalCreator>
        <Footer />
      </div>
    </>
  );
}

export default App;
