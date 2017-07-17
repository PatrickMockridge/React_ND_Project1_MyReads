import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    let { books, onShelfChange } = this.props;
    let currentBooks;

    if (this.props.currentBooks) {
      currentBooks = this.props.currentBooks
    } else {
      currentBooks = new Map()
    }

    if (books.length == 0) {
      return (
        <div className="bookshelf-books">
          <br/>
          <h2>No Books Here</h2>
        </div>
      );
    }

    else {

      return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book =>
              <li key={book.id}>
                <Book
                  onShelfChange={onShelfChange}
                  book={book}
                  selectValue={currentBooks.get(book.id)}
                  />
              </li>
            )}
          </ol>
        </div>
      );
    }
  }
}

export default BookShelf;
