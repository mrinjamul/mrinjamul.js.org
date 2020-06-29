import React from "react";
import logo from "../logo.svg";

import "../styles/Media.scss";

function Media() {
  return (
    <div className="section">
      <h1>
        <span>My Media</span>
      </h1>
      <img src={logo} className="Media-logo" alt="logo" draggable="false" />
    </div>
  );
}

export default Media;
