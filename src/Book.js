import React from "react";
import BookShelfChanger from './BookShelfChanger';

const Book = ({ book }) => {
  return (
    <li>
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
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <div className="book-authors">{book.shelf}</div>
      </div>
    </li>
  );
};

export default Book;
