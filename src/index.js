import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HeaderSearch from "./component/HeaderSearch";
// import App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <HeaderSearch />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
