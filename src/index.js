import React from "react";
import ReactDom from "react-dom";

// Component names need to be capitalized in React, or they won't work.
function BookList() {
  return (
    <div>
      <Book />
      <Place />
    </div>
  );
}

// Nested Components
const Book = () => <h1>harry potter</h1>;
const Place = () => <p>crossword</p>;

/* // Using createElement for each HTML component-> Not recommended
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello people")
  );
}; */

ReactDom.render(<BookList />, document.getElementById("root"));
