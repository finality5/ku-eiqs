import React, { Component } from "react";
import "./App.css";
//import Schedule from './components/Schedule';
import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";
import axios from "axios";
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
  Button
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
      float:"center",
      padding:"10px",
      marginTop:"20px",
      display:this.state.data.length!==0?'block':'none'
    }
  }

  buttonSubmit = () =>{
    axios.post("https://ku-eiqs-backend.herokuapp.com/examtbl", this.state.data).then(res => {
      console.log(res);
    });
    
  }

  render() {
    //console.log(this.state);

    return (
      <div>
        <Navbar />

        <Section
          title="KU EiQS"
          subtitle={"Kasetsart University Examination Information Querying System"}
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
                <Grid.Row container="true" className="App">
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
                <Grid.Row style={this.checkButton()} >
                  <Button type="submit" animated onClick={this.buttonSubmit}>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                      Go!
                    </Button.Content>
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
            <Grid.Row>
             
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
