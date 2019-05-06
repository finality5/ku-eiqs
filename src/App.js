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
import Filter from "./components/Filter";
import StudentFilter from "./components/studentFilter";
import TeacherFilter from "./components/teacherFilter";
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
    selectedData: [],
    warningStyle: { display: "none" },
    loginData: {},
    isLogin: false,
    buttonClick: false
  };
  handleChange = (e, { value }) => {
    let tmp = [];

    for (var i = 0; i < value.length; i++) {
      tmp.push(SubjectsObj[value[i]]);
    }
    this.setState({ data: tmp });
    this.setState({ dropdownValue: value });
  };

  loginAdd = data => {
    this.setState({ loginData: data });
    if (this.state.loginData.authentication) {
      this.setState({ isLogin: true });
    }
   
  };

  AddSec = (secs, keys) => {
    let temp = [...this.state.data];

    for (var i = 0; i < temp.length; i++) {
      if (temp[i].key === keys) {
        temp[i].sec = secs;
      }
    }
    this.setState({ data: temp });

   
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
    this.setState({buttonClick: true})
    let check = true;

    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].sec <= 0) {
        check = false;
      }
    }
    if (check) {
      this.setState({ warningStyle: { display: "none" } });
      axios
        .post("https://ku-eiqs-backend.herokuapp.com/examtbl", {
          tbl: this.state.data
        })
        .then(res => {
          console.log("####",res);
          this.setState({ selectedData: res.data.tbl });
        });
    } else {
      this.setState({ warningStyle: { display: "block" } });
    }
    return check;
  };

  loginClick = () => {
    this.setState({ loginData: {} });
    this.setState({ isLogin: false });
  };

  filteredData=(res)=>{
    this.setState({buttonClick: true})
    this.setState({selectedData:res.data.tbl})
  }

  render() {
    console.log(this.state)
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

              {!this.state.isLogin ? (
                <Grid.Column>
                  <Header icon textAlign="center">
                    <Icon name="world" />
                    Nontri Login
                  </Header>
                  <Login loginAdd={this.loginAdd} />
                </Grid.Column>
              ) : (
                <Grid.Column>
                  <Header icon textAlign="center">
                    <Icon name="users" color="black" circular />
                    <Header.Content>Welcome</Header.Content>
                  </Header>

                  <Filter userData={this.state.loginData} />
                  <Button
                    animated
                    style={{ marginTop: "2em" }}
                    onClick={this.loginClick}
                  >
                    <Button.Content visible>Log out</Button.Content>
                    <Button.Content hidden>
                      <Icon name="sign-out" />
                    </Button.Content>
                  </Button>
                  <Divider section />
                  {this.state.loginData.group==='s'?<StudentFilter userData={this.state.loginData} filteredData={this.filteredData}/>:<TeacherFilter userData={this.state.loginData} filteredData={this.filteredData}/>
                  }
                </Grid.Column>
              )}
            </Grid.Row>
            <Grid.Row />
          </Grid>
        </Segment>
        {this.state.buttonClick?
        <Grid
          columns={2}
          stackable
          relaxed="very"
          className="App"
          id="section3"
        >
          <Grid.Column width={8}>
            <Card selectedData={this.state.selectedData} />
          </Grid.Column>
          <Grid.Column width={8}>
            <main>
              <Calendar calDay={this.state.selectedData} />
            </main>
          </Grid.Column>
        </Grid>: null}
      </div>
    );
  }
}

export default App;
