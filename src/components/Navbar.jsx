import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='first-navbar'>
        <Navbar expand="md no-padding">
            <Nav className="ml-auto topNav" navbar>
              <NavItem>
                <NavLink href="/register/">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  English
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    English
                  </DropdownItem>
                  <DropdownItem>
                    Indonesia
                  </DropdownItem>
                  <DropdownItem>
                    Spain
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
