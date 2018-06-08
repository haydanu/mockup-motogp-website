import React from 'react';
import CountDown from './CountDown';

class ContentOne extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'November 08, 2018'
    };
  }
  render(){
    return(
      <div style={{color:'white'}}>
        <div className='motogp-logo'>
          
        </div>
        <div className='sepang-flag'>
          <img src={require('./images/sepang.svg')} alt='sepangflag' style={{width: '50px'}}/>
        </div>
        <h2>Shell Motorcycle Grand Prix</h2>
        <p>04 - 08 November 2018, 07:30 PM</p>
        <CountDown deadline={this.state.deadline} />
        <button>buy tickets</button>
      </div>
    )
  }
}

export default ContentOne;
