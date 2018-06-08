import React from 'react';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand><img src={require('./images/motogp-logo.png')} alt='motogplogo' style={{width: '150px'}}/></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
