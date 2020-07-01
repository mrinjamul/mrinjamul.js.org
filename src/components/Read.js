import React, { Component } from "react";

import "../styles/Read.scss";

import Navbar from "./NavBar";
import MessageBody from "./MessageBody";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 2,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hi",
        },
        {
          id: 3,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "How are you?",
        },
        {
          id: 4,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "You are Awesome",
        },
        {
          id: 5,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 6,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 7,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 8,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 9,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 10,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 11,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
        {
          id: 12,
          name: "Anonymous",
          email: "example@gmail.com",
          message: "Hello",
        },
      ],
    };
  }

  render() {
    // console.log(this.state.messages.length);
    return (
      <div className="main">
        <Navbar numMessage={this.state.messages.length} />
        <MessageBody messages={this.state.messages} />
      </div>
    );
  }
}

export default Read;
