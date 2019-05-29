import React from "react";
import Book from './Book';

const BookShelf = props => {
    const { shelf, books } = props;
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
                shelf={shelf}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
}

export default BookShelf;
