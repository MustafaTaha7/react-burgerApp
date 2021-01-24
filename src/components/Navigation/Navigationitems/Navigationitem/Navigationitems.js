import React from "react";
import "./Navigationitem.css";
const Navigationitem = (props) => {
  return (
    <li className="Navigationitem">
      <a href={props.link} className={props.active ? "active" : null}>
        {props.children}
      </a>
    </li>
  );
};

export default Navigationitem;
