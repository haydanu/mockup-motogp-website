import React from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';

export default class SecondNavBar extends React.Component {
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
        <Navbar expand="md" className='topNav-2'>
          <NavbarBrand href="/">
            <img src={require('./images/motogp-logo-red-white.png')} alt='motogplogo' style={{
                width: '150px'
              }}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar="navbar">
            <Nav className="ml-auto secondNavLink" navbar="navbar">
              <NavItem>
                <NavLink className='navLink-2' href="/tickets/">tickets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navLink-2' href="/lineups">lineups</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='navLink-2' href="/news">news</NavLink>
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
