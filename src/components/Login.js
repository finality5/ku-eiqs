import React, { Component } from "react";
import axios from "axios";
import { Input, Form, Button, Label, Message } from "semantic-ui-react";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      loginData: {}
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
    axios
      .post("https://ku-eiqs-backend.herokuapp.com/login", this.state)
      .then(res => {
        if (!res.data.authentication) {
          return this.setState({ error: "Username or password is incorrect" });
        }
        this.setState({loginData:res.data})
        this.props.loginAdd(this.state.loginData)
        //console.log(res);
        //console.log(this.state);
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
    return (
      <div className="Login">
        <Form error onSubmit={this.handleSubmit}>
          {this.state.error && (
            <Message
              onClick={this.dismissError}
              error
              header={this.state.error}
            />
          )}
          <Form.Field required>
            <Input
              placeholder="Account"
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
              placeholder="Password"
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
            <Button type="submit" animated>
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>Go!</Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
