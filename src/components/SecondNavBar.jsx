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
import {
  Link,
  Events,
  animateScroll as scroll,
  scroller
} from 'react-scroll';

export default class SecondNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (<div>
      <Navbar expand="md" className='topNav-2'>
        <NavbarBrand href="/">
          <img src={require('./images/motogp-logo-red-white.png')} alt='motogplogo' style={{
              width: '150px'
            }}/></NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          <Nav className="ml-auto secondNavLink" navbar="navbar">
            <NavItem>
              <Link activeClass="active" to="link1" spy={true} smooth={true} duration={500}>
                <NavLink className='navLink-2' href="/tickets/">tickets</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink className='navLink-2' href="/lineups">lineups</NavLink>
            </NavItem>
            <NavItem>
              <Link activeClass="active" to="link2" spy={true} smooth={true} duration={500}>
                <NavLink className='navLink-2' href="/news">news</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" to="link3" spy={true} smooth={true} duration={500}>
                <NavLink href="/about">about</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>);
  }
}
