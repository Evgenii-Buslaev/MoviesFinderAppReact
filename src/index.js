import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./components/App/App.css";
import App from "./components/App/App";

/* import FilmsService from "./API/FilmsService"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* console.log(FilmsService.getPremiers()); */
