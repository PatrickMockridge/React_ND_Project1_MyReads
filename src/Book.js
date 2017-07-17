import React, { Component } from "react";

class Book extends Component {
  render() {
    let book = this.props.book;

    let imageLink;
    let title;
    let shelf;
    let authors;


    if (book.imageLinks) {
      imageLink = book.imageLinks.thumbnail
      console.log(imageLink)
    }
    else {
      imageLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
    }

    if (book.title.length < 15) {
      title = book.title
    }
    else {
      title = book.title.substring(0, 15) + "..."
    }


    if (this.props.selectValue) {
      shelf = this.props.selectValue
    } else if(book.shelf) {
      shelf = book.shelf
    } else {
      shelf = "none"
    }


    console.log(shelf);

    if (book.authors) {
      if (book.authors.join(", ").length < 15) {
        authors = book.authors.join(", ")
      } else {
        authors = book.authors.join(", ").substring(0, 15) + ".."
      }
    }

    return (
      <div>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageLink}")`
            }}
          />}
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={event =>
                this.props.onShelfChange(book, event.target.value)}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {title}
        </div>
        <div className="book-authors">
          {authors}
        </div>
      </div>
    );
  }
}

export default Book;
