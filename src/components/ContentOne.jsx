import React from 'react';
import CountDown from './CountDown';
import {Row, Col, Button} from 'reactstrap';
import Modal from './modal/Modal'

class ContentOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 08, 2018',
      open: false
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({open: !prevState.open}));
  }

  render() {
    const { open } = this.state

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
          <Button className='buyTicketBtn1' onClick={this.toggleModal}>buy tickets</Button>
          <Modal show={open} onHide={this.toggleModal} style={{textAlign:'center'}}>You can buy the tickets from this site <a
            href='https://www.sepangcircuit.com/ticketing/2018-shell-malaysia-motorcycle-grand-prix-offici/2018-shell-malaysia-motorcycle-grand-prix-offici'
            rel="noopener noreferrer" target='_blank'>
            click here to proceed
            </a>
          </Modal>
        </Col>
      </Row>
    </div>)
  }
}

export default ContentOne;
