import React, { Component } from "react";
import { Link } from "react-router-dom";
import { debounce } from 'throttle-debounce';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';


class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResultsBooks: []
  }

  updateQuery = query => {
    this.setState({ query });
    if (query) {
      this.executeSearch(query);
    }
    else {
      this.setState({ searchResultsBooks: [] })
    }
  }

  clearQuery = () => {
    this.setState({ 
      query: '',
      searchResultsBooks: [] 
    })
  }
  
  // executeSearch calls the API search method
  // and uses debounce from 'throttle-debounce'
  // to avoid querying while the user is still
  // typing
  executeSearch = debounce(400, query => {
      return (
        BooksAPI.search(query).then((searchResults) => {
        this.setState({ searchResultsBooks: searchResults })
        })
      )
  })

  render() {
    const { query, searchResultsBooks } = this.state;
    const { books, updateShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            <button>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchResultsBooks.length > 0 && (
              <div>
                <h3>{searchResultsBooks.length} books found:</h3>
                <ol className="books-grid">
                  {searchResultsBooks.map(book => (
                    <Book
                      key={book.id}
                      book={book}
                      updateShelf={updateShelf}
                      books={books}
                    />
                  ))}
                </ol>
              </div>
          )}
        </div>
        <div className="clear-search">
          <button onClick={this.clearQuery}>Clear search</button>
        </div>
        
      </div>
    );
  }
}

export default SearchBooks;