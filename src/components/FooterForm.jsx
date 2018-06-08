import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>

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
    );
  }
}
