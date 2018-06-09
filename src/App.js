import React, {Component} from 'react';
import './App.css';
import {
  Element,
} from 'react-scroll';

import NavBar from './components/Navbar';
import SecondNavBar from './components/SecondNavBar';
import ContentOne from './components/ContentOne';
import Footer from './components/Footer';
import TicketTitle from './components/TicketTitle';
import BuyTickets from './components/BuyTickets';
import CardFooter from './components/CardFooter';
import NewsTitle from './components/NewsTitle';
import Cards from './components/Cards';
import Map from './components/Map';
import FooterForm from './components/FooterForm';

class App extends Component {
  render() {
    return (<div className="App container">

      <div className='bg-1'>
        <NavBar/>
        <SecondNavBar/>
        <ContentOne/>
      </div>

      <Element name='link2'>
        <div className='bg-2'>
          <NewsTitle/>
          <Cards/>
        </div>
      </Element>

      <Element name='link1'>
        <div className='bg-3'>
          <TicketTitle/>
          <BuyTickets/>
          <CardFooter/>
        </div>
      </Element>

      <Element name='link3'>
        <div className='bg-4'>
          <Map/>
          <FooterForm/>
        </div>
      </Element>

      <div className='footer'>
        <Footer/>
      </div>
    </div>);
  }
}

export default App;
