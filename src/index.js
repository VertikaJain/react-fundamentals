import React from "react";
import ReactDom from "react-dom";

// Component names need to be capitalized in React, or they won't work.
function Greeting() {
  return <h4>hello world</h4>;
}
ReactDom.render(<Greeting />, document.getElementById("root"));
