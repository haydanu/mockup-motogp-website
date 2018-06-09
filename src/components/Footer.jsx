import React from 'react';

class Footer extends React.Component {
  render() {
    return (<div>
    A Ticketing Platform by <img src={require('./images/logo-loket-blue.png')} alt='loket.com' width='70px'/>
    </div>)
  }
}

export default Footer;
