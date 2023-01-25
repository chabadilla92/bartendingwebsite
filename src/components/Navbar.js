import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon } from 'semantic-ui-react';

import '../css/navBar.css';

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className='navbar'>
        <Menu tabular>
          <Header as='h1'>
            <Icon circular name='beer' />
          </Header>
          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                className='item'
              >
                home.
              </Menu.Item>
            </Link>

            <Link to='/contact'>
              <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
              >
                contact.
              </Menu.Item>
            </Link>

            <Link to='/services'>
              <Menu.Item
                name='services'
                active={activeItem === 'services'}
                onClick={this.handleItemClick}
              >
                services
              </Menu.Item>
            </Link>

            <Link to='/booking'>
              <Menu.Item
                name='book now'
                active={activeItem === 'book now'}
                onClick={this.handleItemClick}
              >
                book now.
              </Menu.Item>
            </Link>

            <Link to='/questions'>
              <Menu.Item
                name='faq'
                active={activeItem === 'faq'}
                onClick={this.handleItemClick}
              >
                faq.
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
