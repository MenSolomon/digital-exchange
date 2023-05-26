import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Tradepage from "./components/tradepage.jsx";
import Home from "./components/home.jsx";
import Statistics from "./components/statistics.jsx";
import Currency from "./components/currency.jsx";
import News from "./components/news.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
