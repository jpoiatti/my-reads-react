import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

const ListBooks = props => {

  ListBooks.propTypes = {
    bookshelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
      const { bookshelves, books, updateShelf } = props;
      return (
        <>
          <div className="list-books-content">
            <div>
                <div className="bookshelf">
                  {bookshelves.map((shelf) => {
                    const filteredBooks = books.filter(
                      book => book.shelf === shelf.category
                    );
                    return (
                    <BookShelf
                      key={shelf.key}
                      shelf={shelf} 
                      books={filteredBooks}
                      updateShelf={updateShelf}
                    />
                    )
                  })}
                </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </>
      )
}

export default ListBooks;