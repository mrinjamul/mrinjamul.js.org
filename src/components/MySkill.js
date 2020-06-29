import React, { Component } from "react";

class MySkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { id: 1, title: "C", value: 80 },
        { id: 2, title: "C++", value: 80 },
        { id: 3, title: "Python", value: 60 },
        { id: 4, title: "HTML", value: 95 },
        { id: 5, title: "CSS / SASS", value: 90 },
        { id: 6, title: "Javascript", value: 80 },
        { id: 7, title: "ReactJs", value: 70 },
        { id: 8, title: "Shell scripting", value: 75 },
        { id: 9, title: "Git VCS", value: 95 },
      ],
    };
  }
  render() {
    return (
      <div className="section">
        <h1>
          <span>My Skills</span>
        </h1>
        <ul>
          {this.state.skills.map((skill) => (
            <li key={skill.id}>
              {skill.title} <br />
              <progress min="0" max="100" value={skill.value}></progress>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MySkill;
