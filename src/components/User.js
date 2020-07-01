import React from "react";

function User(props) {
  return (
    <div className="user" onClick={props.onclick}>
      <strong>{props.name}</strong>
      <br />
      <small>{props.email}</small>
    </div>
  );
}

export default User;
