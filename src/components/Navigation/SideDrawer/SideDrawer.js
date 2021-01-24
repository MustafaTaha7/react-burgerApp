import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Navigationitem from "../Navigationitems/Navigationitem/Navigationitems";
import Navigationitems from "../Navigationitems/Navigationitems";
import "./SideDrawer.css";
const SideDrawer = (props) => {
  let attachedClases = ["SideDrawer", "Close"];
  {
    props.open ? (attachedClases = ["SideDrawer", "Open"]) : null;
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClases.join(' ')}>
        <Logo height="11%" />
        <nav>
          <Navigationitems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
