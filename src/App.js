import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import { ArrowTop } from "./components/ArrowTop";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Outlet />
        <PortalArrowTop>
          <ArrowTop />
        </PortalArrowTop>
      </div>
    </>
  );
}
const PortalArrowTop = (props) => {
  const portal = document.getElementById("portal");
  return createPortal(props.children, portal);
};

export default App;
