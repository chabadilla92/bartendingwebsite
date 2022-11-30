import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import BookNow from "../pages/BookNow";
import Contact from "../pages/Contact";
import Questions from "../pages/Questions";
import Services from "../pages/Services";
import Home from "../pages/Home";
import booking from '../images/booking.avif';
import contact from '../images/contact.avif';
import faq from '../images/faq.avif';
import home from '../images/home.avif';
import services from '../images/services.avif';


const jumbotronData = [
  {
    id: '/',
    img: <img className="ui fluid image" src={home} alt=""/>,
  },
  {
    id: '/booking',
    title: 'book now',
    img: <img className="ui fluid image" src={booking} alt=""/>
  },
  {
    id: '/contact',
    title: 'contact us',
    img: <img className="ui fluid image" src={contact} alt=""/>
  },
  {
    id: '/questions',
    title: 'faq',
    img: <img className="ui fluid image" src={faq} alt=""/>
  },
  {
    id: '/services',
    title: 'services',
    img: <img className="ui fluid image" src={services} alt=""/>
  },
]

const App = () => {
  return (
    <BrowserRouter>
      <Navbar jumbotronData={jumbotronData}/>
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
