import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import DraweToggal from "../SideDrawer/DraweToggal/DraweToggal";
import "./Toolbar.css";
const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DraweToggal clicked={props.drawerToggleClicked} />
      <Logo  height="80%"/>
      <nav className="DesktopOnly">
        <Navigationitems  />
      </nav>
    </header>
  );
};

export default Toolbar;
