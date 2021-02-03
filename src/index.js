import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"

// import-export example - JS
import { books } from "./books" // not default export
import SpecificBook from "./Book" // default export can have any name in import statement

// Component names need to be capitalized in React, or they won't work.
function BookList() {
  return (
    <section className="booklist">
      {books.map(book => {
        return <SpecificBook key={book.id} {...book} />
      })}
    </section>
  );
}

/* // Using createElement for each HTML component-> Not recommended
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello people")
  );
}; */

ReactDom.render(<BookList />, document.getElementById("root"));
