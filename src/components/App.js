import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import BookNow from "../pages/BookNow";
import Contact from "../pages/Contact";
import Questions from "../pages/Questions";
import Services from "../pages/Services";
import Home from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/questions" exact element={<Questions />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/booking" exact element={<BookNow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
