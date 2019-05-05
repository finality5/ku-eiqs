import React, { Component } from "react";
import { Menu, Tab, Dropdown, Icon, Button, Message } from "semantic-ui-react";
import axios from "axios";
export class studentFilter extends Component {
  state = {
    year: "",
    semester: "",
    midfin:"",
    dropYear: "",
    dropSem: "",
    dropMidfin:"",
    warningStyle: { display: "none" }
  };

  buttonSubmit = () => {
    let returnData = {
      token: this.props.userData.token,
      name: this.props.userData.userdata.name,
      group: this.props.userData.group,
      data: { year: this.state.year, semester: this.state.semester ,midfinal: this.state.midfin }
    };
    
    console.log("@",returnData)
    if (this.state.year !== "" && this.state.semester !== "" && this.state.midfin !=="") {
      this.setState({ warningStyle: { display: "none" } });
      
      axios.post("https://ku-eiqs-backend.herokuapp.com/login",returnData).then(res => {
        console.log(res);
      });
    } else {
      this.setState({ warningStyle: { display: "block" } });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Tab
          panes={[
            { 
              menuItem: (
                <Menu.Item key="year">
                  <span>
                    Year&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.state.year !== "" ? (
                      <Icon name="check circle" color="green" fitted />
                    ) : (
                      <Icon name="search" fitted />
                    )}
                  </span>
                </Menu.Item>
              ),
              render: () => (
                <Tab.Pane>
                  <Dropdown
                    placeholder="Select Year"
                    fluid
                    selection
                    options={[
                      {
                        key: "2561",
                        text: "2561",
                        value: "2561"
                      },
                      
                    ]}
                    value={this.state.dropYear}
                    onChange={(e, { value }) => {
                      this.setState({ year: value });
                      this.setState({ dropYear: value });
                    }}
                  />
                </Tab.Pane>
              )
            },
            {
              menuItem: (
                <Menu.Item key="semester">
                  Semester&nbsp;&nbsp;&nbsp;&nbsp;
                  {this.state.semester !== "" ? (
                    <Icon name="check circle" color="green" fitted />
                  ) : (
                    <Icon name="search" fitted />
                  )}
                </Menu.Item>
              ),
              render: () => (
                <Tab.Pane>
                  <Dropdown
                    placeholder="Select Semester"
                    fluid
                    selection
                    options={[
                      {
                        key: "1",
                        text: "1st Semester",
                        value: "1"
                      },
                      {
                        key: "2",
                        text: "2nd Semester",
                        value: "2"
                      }
                    ]}
                    value={this.state.dropSem}
                    onChange={(e, { value }) => {
                      this.setState({ semester: value });
                      this.setState({ dropSem: value });
                    }}
                  />
                </Tab.Pane>
              )
            },
            {
              menuItem: (
                <Menu.Item key="midfin">
                  Mid/Final&nbsp;&nbsp;&nbsp;&nbsp;
                  {this.state.midfin !== "" ? (
                    <Icon name="check circle" color="green" fitted />
                  ) : (
                    <Icon name="search" fitted />
                  )}
                </Menu.Item>
              ),
              render: () => (
                <Tab.Pane>
                  <Dropdown
                    placeholder="Select Test"
                    fluid
                    selection
                    options={[
                      {
                        key: "mid",
                        text: "Midterm",
                        value: "mid"
                      },
                      {
                        key: "final",
                        text: "Final",
                        value: "final"
                      }
                    ]}
                    value={this.state.dropMidfin}
                    onChange={(e, { value }) => {
                      this.setState({ midfin: value });
                      this.setState({ dropMidfin: value });
                    }}
                  />
                </Tab.Pane>
              )
            }
          ]}
        />
        <Message
          style={this.state.warningStyle}
          error
          content="Please select year and semester"
        />
        <Button type="submit" animated onClick={this.buttonSubmit} style={{marginTop:"1em"}}>
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>Go!</Button.Content>
        </Button>
      </div>
    );
  }
}

export default studentFilter;
