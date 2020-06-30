import React, { Component } from "react";

import firebase from "../firebase";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    firebase
      .firestore()
      .collection("github-messages")
      .add({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          message: "",
        });
        alert(`Message Sent !`);
      });
  };

  render() {
    return (
      <div className="section">
        <h1>
          <span>Contact Me</span>
        </h1>

        <svg className="face" height="100" width="100">
          <circle cx="50" cy="50" r="50" fill="#FDD835" />
          <circle cx="30" cy="30" r="10" fill="#FFFFFF" />
          <circle cx="70" cy="30" r="10" fill="#FFFFFF" />
          <circle cx="30" cy="30" r="5" fill="#000000" />
          <circle cx="70" cy="30" r="5" fill="#000000" />
          <path
            d="M 30 70 q 20 20 40 0"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill="none"
          />
        </svg>

        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={this.state.name}
            placeholder="Name"
            type="text"
            required
            onChange={this.handleChange}
          />
          <br />
          <input
            name="email"
            value={this.state.email}
            placeholder="Email"
            type="email"
            required
            onChange={this.handleChange}
          />
          <br />
          <textarea
            name="message"
            value={this.state.message}
            placeholder="Write a message."
            required
            onChange={this.handleChange}
          ></textarea>
          <input type="submit" value="SEND" className="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
