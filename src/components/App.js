import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../css/navBar.css';
import BookNow from '../pages/BookNow';
import Questions from '../pages/Questions';
import Home from '../pages/Home';
import Footer from './Footer';
import Confirmation from '../pages/Confirmation';
import logo from '../images/logo.png';
import logocopy from '../images/logocopy.svg';

class App extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleCreateDocument(newForm) {
    //TODO: add Firebase createDocument here.
    console.log(newForm);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <BrowserRouter>
        <div className='navbar'>
          <Menu tabular>
            <Menu.Menu position='right'>
              <Link to='/'>
                <Menu.Item
                  name='/home'
                  active={activeItem === '/home'}
                  onClick={this.handleItemClick}
                  className='item'
                >
                  home.
                </Menu.Item>
              </Link>

              <Link to='/booking'>
                <Menu.Item
                  name='/booking'
                  active={activeItem === '/booking'}
                  onClick={this.handleItemClick}
                  className='item'
                >
                  services.
                </Menu.Item>
              </Link>

              <Link to='/questions'>
                <Menu.Item
                  name='/faq'
                  active={activeItem === '/faq'}
                  onClick={this.handleItemClick}
                  className='item'
                >
                  faq.
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Menu>
        </div>

        <Routes>
          <Route
            path='/'
            exact
            element={<Home handleJumboSelect={this.handleItemClick} />}
          />
          <Route path='/questions' exact element={<Questions />} />
          <Route
            path='/booking'
            exact
            element={
              <BookNow handleCreateDocument={this.handleCreateDocument} />
            }
          />
          <Route path='/confirmation' exact element={<Confirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
