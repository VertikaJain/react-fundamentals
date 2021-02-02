import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"

// Component names need to be capitalized in React, or they won't work.
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

// global variables
const author = 'Barack Obama'
const img = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600357110l/55361205._SY475_.jpg"
const title = "A Promised Land"

// Nested Components
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
};

const Image = () => <img src={img} /> //JS in JSX statements
const Title = () => <h1>{title}</h1>
// Inline CSS overwrites the corresponding properties defined in the imported CSS file.
const Author = () => <h4 style={{ color: 'grey', fontSize: '0.75rem', marginTop: '0.45rem' }}>{author}</h4>

/* // Using createElement for each HTML component-> Not recommended
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello people")
  );
}; */

ReactDom.render(<BookList />, document.getElementById("root"));
