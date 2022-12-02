import React, { Component } from "react";
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

//TODO: pass the activeItem state to ButtonSection and have it update the state in App.js with whatever path it navigates to.

class App extends Component {
  
  state = {};
  
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // console.log(this.state.activeItem, name)
  };

  
  render() {
    const { activeItem } = this.state;
    
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
                onClick={this.handleItemClick}
                className="item"
              >
                home
              </Menu.Item>
            </Link>

            <Link to="/contact">
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleItemClick}
                className="item"
              >
                contact
              </Menu.Item>
            </Link>

            <Link to="/services">
              <Menu.Item
                name="services"
                active={activeItem === "services"}
                onClick={this.handleItemClick}
                className="item"
              >
                services
              </Menu.Item>
            </Link>

            <Link to="/booking">
              <Menu.Item
                name="book now"
                active={activeItem === "book now"}
                onClick={this.handleItemClick}
                className="item"
              >
                book now
              </Menu.Item>
            </Link>

            <Link to="/questions">
              <Menu.Item
                name="faq"
                active={activeItem === "faq"}
                onClick={this.handleItemClick}
                className="item"
              >
                faq
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>

        <Jumbotron />
      </div>

      <Routes>
        <Route path="/" exact element={<Home handlePageSelect={this.handleItemClick} />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/questions" exact element={<Questions />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/booking" exact element={<BookNow />} />
      </Routes>
    </BrowserRouter>
  );
  }
};

export default App;
