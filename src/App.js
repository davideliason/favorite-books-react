import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBar extends Component{

  constructor(props){
    super(props);
     this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
     this.handleSeeBookOwned = this.handleSeeBookOwned.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  
  handleSeeBookOwned(e) {
    this.props.onSeeBookOwned(e.target.checked);
   }


  render(){
    return(
        <form>
          <input 
            type="text" 
            placeholder="Search ..." 
            value={this.props.filterText} 
            onChange={this.handleFilterTextInputChange}
            />
           <p>
          <input 
            type="checkbox" 
            checked={this.props.seeBookOwned}
            onChange={this.handleSeeBookOwned} />
          {' '}
          show owned books only
        </p>
        </form>
      );
  }
}
// onFilterTextInput
// onSeeBookOwned

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
      var localFilterText= this.props.filterText;
      var localSeeBookOwned = this.props.seeBookOwned;

    this.props.books.forEach(function(book){
      if(book.title.indexOf(localFilterText) === -1 || !book.owned && localSeeBookOwned ){
        return;
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
      filterText: '',
      seeBookOwned: true
      }

     this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
     this.handleSeeBookOwned = this.handleSeeBookOwned.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleSeeBookOwned(ownedOnly) {
    this.setState({
      seeBookOwned: ownedOnly
    })
   }

  render() {
    return (
      <div className="App">
        <SearchBar 
          filterText={this.state.filterText}
          seeBookOwned={this.state.seeBookOwned}
          onFilterTextInput={this.handleFilterTextInput}
          onSeeBookOwned={this.handleSeeBookOwned}
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
