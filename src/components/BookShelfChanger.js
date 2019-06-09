import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  // Calls bookShelfChanger function (passed via props
  // from the main component App.js), passing the book
  // and the new shelf the book will go to.
  handleChange = event => {
    this.props.updateShelf(this.props.book, event.target.value)
  }

    render() {
      // 'book' is the book which is changing shelf
      // 'books' are the books already placed in 
      // one of the shelves.
      const { book, books, } = this.props;
      
      // Create shelf with value of 'none' as standard
      let shelf = 'none';

      // Checks if the book is already in 
      // some of the shelves.
      // This ensures the correct shelf category
      // is shown in the shelves select menu.
      for(let b of books) {
        if (b.id === book.id) {
          shelf = b.shelf;
        }
      }

      return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
      )
    }
}

export default BookShelfChanger;