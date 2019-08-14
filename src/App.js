import React from 'react';
import Blog from './component/Blog'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Blog/>
      </header>
    </div>
  );
}

export default App;
