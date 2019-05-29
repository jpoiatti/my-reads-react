import React, { Component } from "react";
import { Link } from "react-router-dom";
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = query => {
    this.setState({ query });
    if (query) {
      this.executeSearch(query);
    }
    else {
      this.setState({ books: [] })
    }
  }

  clearQuery = () => {
    this.setState({ 
      query: '',
      books: [] 
    })
  }
  
  // executeSearch calls the API search method
  // and uses debounce from 'throttle-debounce'
  // to avoid querying while the user is still
  // typing
  executeSearch = debounce(400, query => {
      return (
        BooksAPI.search(query).then((searchResults) => {
        this.setState({ books: searchResults })
        })
      )
  })

  render() {
    const { query, books } = this.state;
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
          {books.length > 0 && (
              <div>
                <h3>{books.length} books found:</h3>
                <ol className="books-grid">
                  {books.map(book => (
                    <Book
                      key={book.id}
                      shelf={book.shelf}
                      book={book}
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