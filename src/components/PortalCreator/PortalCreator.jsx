import {createPortal} from "react-dom";

const PortalCreator = (props) => {
  const portal = document.getElementById("portal");
  return createPortal(props.children, portal);
};

export default PortalCreator;