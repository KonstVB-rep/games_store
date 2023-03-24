import {createPortal} from "react-dom";

const PortalCreator = ({children}) => {
  const portal = document.getElementById("portal");
  return createPortal(children, portal);
};

export default PortalCreator;