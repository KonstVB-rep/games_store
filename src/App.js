import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import { ArrowTop } from "./components/ArrowTop";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
        <PortalArrowTop>
          <ArrowTop />
        </PortalArrowTop>
        <Footer/>
      </div>
    </>
  );
}
const PortalArrowTop = (props) => {
  const portal = document.getElementById("portal");
  return createPortal(props.children, portal);
};

export default App;
