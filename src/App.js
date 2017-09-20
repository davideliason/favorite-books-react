import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

var book-data = [
  {category : "science fiction", author: "Isaac Asimov",title:"I, Robot",owned:false},
  {category : "science fiction", author: "Frank Herbert", title: "Dune", owned: false},
  {category : "mystery", author: "Sue Grafton", title: "A is for Alibi", owned: false}
  {category : "mystery", author: "Dan Brown", title: "The Da Vinci Code",owned: false},
  {category : "self-help", author: "Thich Nhat Hanh", title:  "Being", owned: true}
];

export default App;
