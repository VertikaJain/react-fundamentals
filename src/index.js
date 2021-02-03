import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"

// global variables

const firstBook = {
  author: 'Barack Obama',
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600357110l/55361205._SY475_.jpg",
  title: "A Promised Land"
}

const secondBook = {
  author: ' Julia Kelly',
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609080610l/54304262.jpg",
  title: "The Last Garden in England"
}

// Component names need to be capitalized in React, or they won't work.
function BookList() {
  return (
    <section className="booklist">
      <Book author={firstBook.author} img={firstBook.img} title={firstBook.title} >
        <p>A  riveting, deeply personal account of history in the making, from the president who inspired us to believe in the power of democracy. </p>
      </Book>
      <Book author={secondBook.author} img={secondBook.img} title={secondBook.title} />
    </section>
  );
}

// Nested Components
const Book = ({ author, img, title, children }) => {
  return (
    <article className="book">
      <img src={img} alt="image here" />
      <h1>{title}</h1>
      {/* Inline CSS overwrites the corresponding properties defined in the imported CSS file. */}
      <h4 style={{ color: 'grey', fontSize: '0.75rem', marginTop: '0.45rem' }}>{author}</h4>
      {children}
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
