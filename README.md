# MyReads Project

This is a working version for the final assessment project for Udacity's React Fundamentals course, My Reads a simple book management application where the user can search for books and add them to categories (or shelves) to organize the their reading status.
Each book state is maintained throughout the whole application, meaning that if given book which is already in some shelf appears in the search results, its current shelf will be shown (instead of 'none' for books that are not placed in any shelf).

## Getting started

To run the application:

* install all project dependencies with `npm install`
* start and launch the application with `npm start`
* if not opened automatically, access the address http://localhost:3000/ using a browser.

## How to use the application

The application will initially present the three shelves to the user ("Currently Reading", "Want to Read" and "Read") with some pre-selected books in each of them. To search for new books to add to the shelves click the "plus" green icon located at the bottom-right position of the screen. At the "/search" page the desired search terms should be written in the search bar located at the top. If there are any results to be shown, these will appear automatically after the user finish typing.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.