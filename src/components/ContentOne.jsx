import React from 'react';
import CountDown from './CountDown';
import {Row, Col, Button} from 'reactstrap';

class ContentOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 08, 2018'
    };
  }
  render() {
    return (<div style={{
        color: 'white'
      }}>
      <div className='motogp-logo'>
        <img src={require('./images/sepang-track.png')} alt='sepang-track' style={{
            width: '300px'
          }}/>
      </div>

      <Row>
        <Col xs="1">
          <img className='sepang-flag' src={require('./images/sepang.svg')} alt='sepangflag' style={{
              width: '40px'
            }}/>
        </Col>

        <Col xs="11">
          <h4 style={{
              marginBottom: '10px',
              marginTop: '6px'
            }}>Shell Motorcycle Grand Prix</h4>
          <p style={{
              marginBottom: '10px'
            }}>04 - 08 November 2018, 07:30 PM</p>
          <CountDown deadline={this.state.deadline}/>
          <Button className='buyTicketBtn1'>buy tickets</Button>
        </Col>
      </Row>
    </div>)
  }
}

export default ContentOne;
