import React, { useState } from "react";

import User from "./User";

function MessageBody(props) {
  let [messageText, setMessageText] = useState("");

  const onclick = (message) => {
    setMessageText(message);
  };

  const messages = props.messages;

  let UserMessage = messages.map((message) => (
    <User
      key={message.id}
      id={message.id}
      name={message.name}
      email={message.email}
      onclick={() => {
        onclick(message.message);
      }}
    />
  ));
  return (
    <div className="container">
      <div className="users-list">{UserMessage}</div>
      <div className="message">
        <p>
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. */}

          {messageText}
        </p>
      </div>
    </div>
  );
}

export default MessageBody;
