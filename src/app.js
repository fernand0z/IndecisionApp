console.log("App.js is running");

let template = (
  <div>
    <p>This is JSX from app.js! Fernando</p>
    <p>This is some info.</p>
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
