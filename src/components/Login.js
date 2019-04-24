import React, { Component } from "react";
import axios from "axios";
import { Input, Form, Button, Label, Icon } from "semantic-ui-react";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios.post("https://ku-eiqs-backend.herokuapp.com/", this.state).then(res => {
      //console.log(res.data.table);
    });
    //console.log(this.state);
    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <Button onClick={this.dismissError}>✖</Button>
              {this.state.error}
            </h3>
          )}
          <Form.Field required>
            <Input
              labelPosition="left"
              type="text"
              data-test="username"
              value={this.state.username}
              onChange={this.handleUserChange}
            >
              <Label icon="user" />
              <input />
            </Input>
          </Form.Field>
          <Form.Field required>
            <Input
              labelPosition="left"
              type="password"
              data-test="password"
              value={this.state.password}
              onChange={this.handlePassChange}
            >
              <Label icon="lock" />
              <input />
            </Input>
          </Form.Field>
          <Form.Field>
          <Button type='submit' animated>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden><Icon name='globe' /></Button.Content>
          </Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
