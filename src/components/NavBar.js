import React from "react";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <b>You have {props.numMessage} message(s).</b>
    </div>
  );
};

export default NavBar;
