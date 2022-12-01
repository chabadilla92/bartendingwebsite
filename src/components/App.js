import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Header, Icon } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../css/navBar.css";
import Jumbotron from "./Jumbotron";
import BookNow from "../pages/BookNow";
import Contact from "../pages/Contact";
import Questions from "../pages/Questions";
import Services from "../pages/Services";
import Home from "../pages/Home";

//TODO: figure out why tabs aren't highlighting
//TODO: pass the activeItem state to ButtonSection and have it update the state in App.js with whatever path it navigates to.

const App = () => {
  const [activeItem, setActiveItem] = useState("")
  
  const handleItemClick = (e, name) => {
    setActiveItem({activeItem: name });
  }

  return (
    <BrowserRouter>
      <div className="navbar">
        <Menu tabular>
          <Header as="h1">
            <Icon circular name="beer" />
          </Header>
          <Menu.Menu position="right">
            <Link to="/">
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
                className="item"
              >
                home
              </Menu.Item>
            </Link>

            <Link to="/contact">
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={handleItemClick}
              >
                contact
              </Menu.Item>
            </Link>

            <Link to="/services">
              <Menu.Item
                name="services"
                active={activeItem === "services"}
                onClick={handleItemClick}
              >
                services
              </Menu.Item>
            </Link>

            <Link to="/booking">
              <Menu.Item
                name="book now"
                active={activeItem === "book now"}
                onClick={handleItemClick}
              >
                book now
              </Menu.Item>
            </Link>

            <Link to="/questions">
              <Menu.Item
                name="faq"
                active={activeItem === "faq"}
                onClick={handleItemClick}
              >
                faq
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>

        <Jumbotron />
      </div>

      <Routes>
        <Route path="/" exact element={<Home page={activeItem} />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/questions" exact element={<Questions />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/booking" exact element={<BookNow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
