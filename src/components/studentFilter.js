import React, { Component } from "react";
import { Menu, Tab, Dropdown, Icon, Button, Message } from "semantic-ui-react";
import {MidFin} from "./data";
import axios from "axios";
export class studentFilter extends Component {
  state = {
    year: "",
    sem: "",
    mf:"",
    dropYear: "",
    dropSem: "",
    dropMidfin:"",
    warningStyle: { display: "none" }
  };

  buttonSubmit = () => {
    let returnData = {
      token: this.props.userData.token,
      username: this.props.userData.userdata.name,
      query_data: { year: this.state.year, sem: this.state.sem ,mf: this.state.mf }
    };
    
    
    if (this.state.year !== "" && this.state.sem !== "" && this.state.mf !=="") {
      this.setState({ warningStyle: { display: "none" } });
      
      axios.post("https://ku-eiqs-backend.herokuapp.com/stdquery",returnData).then(res => {
        console.log('*',res)
        this.props.filteredData(res);
      });
    } else {
      this.setState({ warningStyle: { display: "block" } });
    }
  };

  render() {
    console.log({
      token: this.props.userData.token,
      username: this.props.userData.userdata.name,
      query_data: { year: this.state.year, sem: this.state.sem ,mf: this.state.mf }
    });
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
                <Menu.Item key="sem">
                  Semester&nbsp;&nbsp;&nbsp;&nbsp;
                  {this.state.sem !== "" ? (
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
                      this.setState({ sem: value });
                      this.setState({ dropSem: value });
                    }}
                  />
                </Tab.Pane>
              )
            },
            {
              menuItem: (
                <Menu.Item key="mf">
                  Mid/Final&nbsp;&nbsp;&nbsp;&nbsp;
                  {this.state.mf !== "" ? (
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
                    options={MidFin}
                    value={this.state.dropMidfin}
                    onChange={(e, { value }) => {
                      this.setState({ mf: value });
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
          content="Please select year semester and mid/final"
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
