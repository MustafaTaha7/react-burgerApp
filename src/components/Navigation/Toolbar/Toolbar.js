import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import "./Toolbar.css";
const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo  height="80%"/>
      <nav className="DesktopOnly">
        <Navigationitems  />
      </nav>
    </header>
  );
};

export default Toolbar;
