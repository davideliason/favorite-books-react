import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBar extends Component{
  render(){
    return(
        <form>
          <input type="text" placeholder="Search ..." value={this.props.filterText} />
           <p>
          <input type="checkbox" checked={this.props.seeBookOwned} />
          {' '}
          show owned books only
        </p>
        </form>
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

class BookInfo extends Component{
  render(){
    var title = this.props.book.owned ? this.props.book.title : <span style={{color:'red'}}>{this.props.book.title}</span>;
    return(
      <span>{title} by {this.props.book.author}</span>
    );
  }
}

class BookBox extends Component{
  render(){
    var booksArr = [];
    var lastCategory = null;
      var x = this.props.filterText;
      console.log(this.props.seeBookOwned);


    this.props.books.forEach(function(book){
      if(book.title === x){
        console.log("match");
      }

      if(book.category !== lastCategory){
        booksArr.push(<GenreBar category={book.category} />);
       }
      booksArr.push(<BookInfo book={book} />);
      lastCategory = book.category;
    });

    return(
      <div>
        {booksArr}
      </div>
    );
  }
}



class FilterableFaveBookApp extends Component {
  constructor(props){
    super(props);
    this.state={
      filterText: 'The Da Vinci Code',
      seeBookOwned: true
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar 
          filterText={this.state.filterText}
          seeBookOwned={this.state.seeBookOwned}
         />
        <BookBox 
          books = {this.props.books} 
          filterText = {this.state.filterText}
          seeBookOwned = {this.state.seeBookOwned}
          />
      </div>
    );
  }
}



export default FilterableFaveBookApp;
