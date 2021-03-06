import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var books = [
  {category : "science fiction", author: "Isaac Asimov",title:"I, Robot",owned:false},
  {category : "science fiction", author: "Frank Herbert", title: "Dune", owned: false},
  {category : "mystery", author: "Sue Grafton", title: "A is for Alibi", owned: false},
  {category : "mystery", author: "Dan Brown", title: "The Da Vinci Code",owned: true},
  {category : "self-help", author: "Thich Nhat Hanh", title:  "Being", owned: true}
];

ReactDOM.render(<App books={books} />, document.getElementById('root'));
registerServiceWorker();
