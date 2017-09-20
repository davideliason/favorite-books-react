import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBar extends Component{
  render(){
    return(
        <h3> Search Bar here </h3>
      );
  }
}

class GenreBar extends Component{
  render(){
    return(
      <h4>{this.props.category}</h4>
    );
  }
}

class BookBox extends Component{
  render(){
    return(
      <div>
        <h3>Title  Author</h3>
        {this.props.books[0].title}
      </div>
    );
  }
}


class FilterableFaveBookApp extends Component {
  render() {
   
    return (
      <div className="App">
        <SearchBar />
        <BookBox books = {this.props.books} />
      </div>
    );
  }
}



export default FilterableFaveBookApp;
