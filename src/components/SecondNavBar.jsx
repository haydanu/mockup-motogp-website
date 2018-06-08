import React from 'react';
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'reactstrap';

export default class SecondNavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/"> <img src={require('./images/motogp-logo.png')} alt='motogplogo' style={{width: '150px'}}/></NavbarBrand>

          <Nav className="ml-auto" navbar="navbar">
            <NavItem>
              <NavLink href="/tickets/">tickets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lineups">lineups</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news">news</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">about</NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      </div>
  );
  }
}
