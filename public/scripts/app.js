"use strict";

console.log("App.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "This is JSX from app.js! Fernando"
  ),
  React.createElement(
    "p",
    null,
    "This is some info."
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
