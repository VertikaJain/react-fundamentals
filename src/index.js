import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"

// global variables

const books = [{
  id: 1,
  author: 'Barack Obama',
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600357110l/55361205._SY475_.jpg",
  title: "A Promised Land"
}, {
  id: 2,
  author: 'Julia Kelly',
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609080610l/54304262.jpg",
  title: "The Last Garden in England"
}, {
  id: 3,
  author: 'Brit Bennett',
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577090827l/51791252._SX318_SY475_.jpg",
  title: "The Vanishing Half"
}]

// Component names need to be capitalized in React, or they won't work.
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <Book key={book.id} book={book} />
      })}
    </section>
  );
}

// Nested Components
const Book = (props) => {
  let { author, img, title } = props.book
  return (
    <article className="book">
      <img src={img} alt="image here" />
      <h1>{title}</h1>
      {/* Inline CSS overwrites the corresponding properties defined in the imported CSS file. */}
      <h4 style={{ color: 'grey', fontSize: '0.75rem', marginTop: '0.45rem' }}>{author}</h4>
    </article>
  )
};

/* // Using createElement for each HTML component-> Not recommended
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello people")
  );
}; */

ReactDom.render(<BookList />, document.getElementById("root"));
