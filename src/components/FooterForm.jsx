import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import FooterMap from './FooterMap';

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetField = this.resetField.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleMessage(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  resetField() {
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return (<div className='row noHeight'>
      <div className='column noHeight'>
        <Form className='getInTouch' onSubmit={this.handleSubmit}>
          <div>
            <h3>Get In Touch</h3>
          </div>

          <div style={{
              marginBottom: '45px'
            }}>
            <p>Have a question about Ticketing Motogp? Need to talk to customer service? Have a great back to you as soon as we can</p>
          </div>

          <FormGroup>
            <Label for="exampleEmail">Your Name</Label>
            <Input type="name" name="name" id="formSend" value={this.state.name} onChange={this.handleName}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input type="email" name="email" id="formSend" value={this.state.email} onChange={this.handleEmail}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Your Message</Label>
            <Input type="textarea" name="text" id="formSend" value={this.state.message} onChange={this.handleMessage}/>
          </FormGroup>

          <div className='formBtn'>
            <Button className='resetField' onClick={this.resetField}>Reset Field</Button>
            <Button className='send'>Send</Button>
          </div>
        </Form>
      </div>

      <div className='column noHeight'>
        <FooterMap/>
      </div>
    </div>);
  }
}
