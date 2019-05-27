import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        {<div>List books component</div>}
      </div>
    )
  }
}

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        {<div>Search books component</div>}
      </div>
    )
  }
}

export default BooksApp
