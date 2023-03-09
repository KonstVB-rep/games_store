import React from 'react';
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";
import {ArrowTop} from "./components/ArrowTop";
import {Footer} from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import {PortalCreator} from "./components/PortalCreator";

function App() {


  return (
    <>
      <div className = "App">
        <Header />
            <ScrollToTop>
              <Outlet />
            </ScrollToTop>
        <PortalCreator>
          <ArrowTop />
        </PortalCreator>
        <Footer />
      </div>
    </>
  );
}

export default App;
