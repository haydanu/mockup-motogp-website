import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FooterMap from './FooterMap';


export default class Example extends React.Component {
  render() {
    return (
      <div className='row noHeight'>
      <div className='column noHeight'>
        <Form className='getInTouch'>
        <div>
          <h3>Get In Touch</h3>
          </div>

          <div>
            <p>Have a question about Ticketing Motogp?
              Need to talk to customer service?
              Have a great back to you as soon as we can</p>
          </div>



        <FormGroup>
          <Label for="exampleEmail">Your Name</Label>
          <Input type="name" name="name" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Your Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <div className='formBtn'>
          <Button>Reset Field</Button>
          <Button className='send'>Send</Button>
        </div>
      </Form>
    </div>

    <div className='column noHeight'>
      <FooterMap />
      </div>
    </div>
    );
  }
}
