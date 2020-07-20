import React, { Component } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import MySkill from "./MySkill";
import MyPage from "./MyPage";
import Media from "./Media";
import Form from "./Form";
import Contact from "./Contact";
import Motto from "./Motto";

import "../styles/Blog.scss";

class Blog extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Blog">
        <Header />
        <AboutMe />
        <MySkill />
        <MyPage />
        <Media />
        <Motto />
        <Form />
        <Contact />

        <div className="copyright">
          &copy; 2019-20 My Injamul Mohammad Mollah. All rights reserved.
        </div>
      </div>
    );
  }
}

export default Blog;
