import React, { Component } from "react";

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: 1,
          title: "My College Schedule",
          link: "https://mrinjamul.github.io/myschedule",
        },
        {
          id: 2,
          title: "React Clock",
          link: "https://mrinjamul.github.io/react-clock",
        },
        {
          id: 3,
          title: "React Counter App",
          link: "https://mrinjamul.github.io/myapp",
        },
        {
          id: 4,
          title: "React Currency Converter",
          link: "https://mrinjamul.github.io/react-currency-calculator",
        },
        {
          id: 5,
          title: "React Movie Cards",
          link: "https://mrinjamul.github.io/react-movie-cards",
        },
        {
          id: 6,
          title: "Calculator by HTML",
          link: "https://mrinjamul.github.io/calculator-html",
        },
        {
          id: 7,
          title: "Snake 2D",
          link: "https://mrinjamul.github.io/snake-2d",
        },
        {
          id: 8,
          title: "Chess 2D",
          link: "https://mrinjamul.github.io/Chess-2D",
        },
      ],
    };
  }
  render() {
    let MyPages = this.state.pages.map((page) => (
      <li key={page.id}>
        <a href={page.link} target="_blank" rel="noopener noreferrer">
          {page.title}
        </a>
      </li>
    ));
    return (
      <div className="section">
        <h1>
          <span>My Pages</span>
        </h1>
        <ul>
          <li>
            <a href="https://mrinjamul.github.io">Home</a>
          </li>
          {MyPages}
        </ul>
      </div>
    );
  }
}

export default MyPage;
