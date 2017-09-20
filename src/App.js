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
    return (
      <div className="App">
        <SearchBar />
        {this.props.books[0].author}
      </div>
    );
  }
}



export default FilterableFaveBookApp;
