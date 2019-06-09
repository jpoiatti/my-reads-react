import React from "react";
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = props => {

  BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

    const { shelf, books, updateShelf } = props;
    return (
      <div className="bookshelf">
        <h2 key={shelf.key} className="bookshelf-title">
          {shelf.name}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                updateShelf={updateShelf}
                books={books}
              />
            ))}
          </ol>
        </div>
      </div>
    );
}

export default BookShelf;
