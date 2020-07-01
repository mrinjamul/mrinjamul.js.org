import React, { Component } from "react";

import "../styles/Read.scss";

import firebase from "../firebase";

import Navbar from "./NavBar";
import MessageBody from "./MessageBody";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    console.log(`componentDidMount`);
    firebase
      .firestore()
      .collection("github-messages")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        data.id = querySnapshot.docs.map((doc) => doc.id);
        // console.log(data); // array of cities objects
        this.setState({
          messages: data,
        });
      });
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
