import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Header, Icon } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../css/navBar.css";
import BookNow from "../pages/BookNow";
import Questions from "../pages/Questions";
import Home from "../pages/Home";

class App extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleCreateDocument(formDocument) {
    //add Firebase createDocument here. 
    console.log("document is:", formDocument)
  }

  
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
                  name="/home"
                  active={activeItem === "/home"}
                  onClick={this.handleItemClick}
                  className="item"
                >
                  home
                </Menu.Item>
              </Link>

              <Link to="/booking">
                <Menu.Item
                  name="/booking"
                  active={activeItem === "/booking"}
                  onClick={this.handleItemClick}
                  className="item"
                >
                  book now
                </Menu.Item>
              </Link>

              <Link to="/questions">
                <Menu.Item
                  name="/faq"
                  active={activeItem === "/faq"}
                  onClick={this.handleItemClick}
                  className="item"
                >
                  faq
                </Menu.Item>
              </Link>

            </Menu.Menu>
          </Menu>
          
        </div>

        <Routes>
          <Route
            path="/"
            exact
            element={<Home handleJumboSelect={this.handleItemClick} />}
          />
          <Route path="/questions" exact element={<Questions />} />
          <Route path="/booking" exact element={<BookNow handleCreateDocument={this.handleCreateDocument} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
