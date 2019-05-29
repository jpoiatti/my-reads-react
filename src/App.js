import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';

const bookshelves = [
  { key: '01', category: 'currentlyReading', name: 'Currently Reading'},
  { key: '02', category: 'wantToRead', name: 'Want to Read'},
  { key: '03', category: 'read', name: 'Read'}
]

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state;
    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="app">
            <Route 
              exact 
              path="/" 
              render={() => (
                <ListBooks
                  bookshelves={bookshelves}
                  books={books}
                />
              )}
            />
            <Route 
              path="/search" 
              component={SearchBooks} 
            />
          </div>
      </div>
    )
  }
}

export default BooksApp
