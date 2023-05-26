import React from "react";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Currency from "./components/currency";
import News from "./components/news";
import Statistics from "./components/statistics";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coins" element={<Currency />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/stats" element={<Statistics />}></Route>
      </Routes>
    </div>
  );
};

export default App;
