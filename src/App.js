import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";

import Search from "./components/Search";
import ListImport from "./components/List";
import Login from "./components/Login";
import { SubjectsObj } from "./components/subjectsObj";
import {
  List,
  Divider,
  Segment,
  Grid,
  Header,
  Icon,
  GridRow
} from "semantic-ui-react";

class App extends Component {
  state = {
    data: [],
    dropdownValue: []
  };
  handleChange = (e, { value }) => {
    let tmp = [];
    for (var i = 0; i < value.length; i++) {
      tmp.push(SubjectsObj[value[i]]);
    }
    this.setState({ data: tmp });
    this.setState({ dropdownValue: value });
  };

  AddSec = (secs, keys) => {
    let temp = [...this.state.data];
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].key === keys) {
        temp[i].sec = secs;
      }
    }
    this.setState({ data: temp });
    console.log(this.state.data);
  };

  Del = keyDel => {
    let dataTemp = [...this.state.data.filter(Data => Data.key !== keyDel)];
    let dropTemp = [
      ...this.state.dropdownValue.filter(Element => Element !== keyDel)
    ];

    this.setState({ data: dataTemp });
    this.setState({ dropdownValue: dropTemp });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <Navbar />

        <Section
          title="INTRO"
          subtitle={"Intro Intro Intro IntroIntro"}
          dark={true}
          id="section1"
        />

        <Segment placeholder>
          <Grid columns={2} stackable relaxed="very">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon textAlign="center">
                  <Icon name="search" />
                  Add Subject
                </Header>

                <Search
                  value={this.state.dropdownValue}
                  onChange={this.handleChange}
                />

                <Header icon textAlign="center">
                  <Icon name="book" />
                  Subjects
                </Header>
                <Grid.Row container className="App">
                  <List
                    divided
                    selection
                    verticalAlign="middle"
                    style={{ marginTop: "50px" }}
                  >
                    <ListImport
                      res={this.state.data}
                      AddSec={this.AddSec}
                      Del={this.Del}
                    />
                  </List>
                </Grid.Row>
              </Grid.Column>

              <Grid.Column>
                <Header icon textAlign="center">
                  <Icon name="world" />
                  Nontri Login
                </Header>
                <Login />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
