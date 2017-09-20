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


class FilterableFaveBookApp extends Component {
  render() {
    var books = [];
    this.props.books.forEach(function(book){
      books.push(book.title);
    })
    return (
      <div className="App">
        <SearchBar />
        <div>{books}
        </div>

      </div>
    );
  }
}



export default FilterableFaveBookApp;
