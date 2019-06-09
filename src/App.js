import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
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

  bookShelfChanger = (bookToMove, newShelf) => {
    BooksAPI.update(bookToMove, newShelf).then(response => {
      if (newShelf === 'none') {
        this.setState(prevState => ({
          books: prevState.books.filter(book => book.id !== bookToMove.id)
        }));
      } else {
        bookToMove.shelf = newShelf;
        this.setState(prevState => ({
          books: prevState.books.filter(book => book.id !== bookToMove.id).concat(bookToMove)
        }));
      }
    }).catch(error => {
      console.log(`Error: ${error}`);
    });
  };

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
                  updateShelf={this.bookShelfChanger}
                />
              )}
            />
            <Route 
              path="/search" 
              render={() => (
                <SearchBooks
                  books={books}
                  updateShelf={this.bookShelfChanger}
                />
              )}
            />
          </div>
      </div>
    )
  }
}

export default BooksApp
