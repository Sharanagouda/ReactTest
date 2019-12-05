import React from 'react';
import logo from './logo.svg';
import './App.css';
import Link from "./containers/Link.react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link >Facebook Title</Link>
      </header>
     
    </div>
  );
}

export default App;
