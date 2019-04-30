import React, { Component } from "react";
//import "./App.css";

import Calendar from "./components/Calendar";
import Card from "./components/Card";
import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";
import axios from "axios";
import Search from "./components/Search";
import ListImport from "./components/List";
import Login from "./components/Login";
//import GenOutput from "./components/genOutput";
import { SubjectsObj } from "./components/subjectsObj";
import {
  List,
  Divider,
  Segment,
  Grid,
  Header,
  Icon,
  Button,
  Message
} from "semantic-ui-react";

class App extends Component {
  state = {
    data: [],
    dropdownValue: [],

    warningStyle: { display: "none" }
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

    //console.log(this.state.data);
  };

  Del = keyDel => {
    let dataTemp = [...this.state.data.filter(Data => Data.key !== keyDel)];
    let dropTemp = [
      ...this.state.dropdownValue.filter(Element => Element !== keyDel)
    ];

    this.setState({ data: dataTemp });
    this.setState({ dropdownValue: dropTemp });
  };

  checkButton = () => {
    return {
      float: "center",
      padding: "10px",
      marginTop: "20px",
      display: this.state.data.length !== 0 ? "block" : "none"
    };
  };

  buttonSubmit = () => {
    let check = true;

    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].sec <= 0) {
        check = false;
      }
    }
    if (check) {
      this.setState({ warningStyle: { display: "none" } });
      axios
        .post("https://ku-eiqs-backend.herokuapp.com/examtbl", this.state.data)
        .then(res => {
          console.log(res);
        });
    } else {
      this.setState({ warningStyle: { display: "block" } });
    }
    return check;
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <Navbar />

        <Section
          title="KU EiQS"
          subtitle={
            "Kasetsart University Examination Information Querying System"
          }
          dark={true}
          id="section1"
        />

        <Segment placeholder id="section2">
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
                
                  <List
                    divided
                    selection
                    verticalAlign="middle"
                    style={{ marginTop: "50px" }}
                    className="App"
                  >
                    <ListImport
                      res={this.state.data}
                      AddSec={this.AddSec}
                      Del={this.Del}
                      secEmpty={this.buttonSubmit}
                    />
                  </List>
                
                <Grid.Row style={this.checkButton()}>
                  <Message
                    style={this.state.warningStyle}
                    error
                    header="Invalid Section"
                    content="Section number must greater than 0 and not empty"
                  />
                  <Button type="submit" animated onClick={this.buttonSubmit}>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>Go!</Button.Content>
                  </Button>
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
            <Grid.Row />
          </Grid>
        </Segment>
        <Grid columns={2} stackable relaxed="very">
          
          <Grid.Column width={8} >
          <Card />
          
          </Grid.Column>
          <Grid.Column width={8}>
            <main>
              <Calendar />
            </main>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
