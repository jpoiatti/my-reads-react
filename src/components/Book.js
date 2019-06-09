import React from "react";
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

const Book = props => {
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  const { book, books, updateShelf } = props;

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div 
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : 'none'
                })`
            }}
          ></div>
          <BookShelfChanger 
            book={book}
            updateShelf={updateShelf}
            books={books}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
