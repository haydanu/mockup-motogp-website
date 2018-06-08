import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import SecondNavBar from './components/SecondNavBar';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='bg-1'>
          <NavBar />
          
          <ContentOne />
        </div>
        <div className='bg-2'>
          <ContentTwo />
        </div>
        <div className='bg-3'>
          <h1>NEWS WILL BE HERE</h1>
        </div>
        <div className='bg-4'>
          <h1> Maps and register form will be here</h1>
        </div>
      <div className='footer'>
        <h1>FOOTER WILL BE HERE</h1>
    </div>
    <h1 style={{textAlign:'center', color:'red'}}>!!!!! DEADLINE TOMORROW NIGHT !!!!!</h1>
      </div>
    );
  }
}

export default App;
