import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className='column'>
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

        <Button>Submit</Button>
      </Form>
    </div>
    );
  }
}
