import React, { Component } from "react";
import { SubjectsDrop } from "./subjectsDrop";
import { SubjectsObj } from "./subjectsObj";
import { Room, Dep, Time, Faculty , MidFin} from "./data";
import {
  Menu,
  Tab,
  Dropdown,
  Icon,
  Button,
  Message,
  Grid,
  Input,
  Header
} from "semantic-ui-react";
import Datepick from "./daypick";
import dateFns from "date-fns";
import axios from "axios";
export class teacherFilter extends Component {
  state = {
    dropVal: [],
    stdid: "",
    dropStdid: "",

    stdfname: "",
    dropStdfname: "",

    stdlname: "",
    dropStdlname: "",

    room: "",
    dropRoom: "",

    sec: "",
    dropSec: "",

    course: "",
    dropCourse: "",

    depid: "",
    dropDepid: "",

    facid: "",
    dropFacid: "",

    date: "",

    time: "",
    dropTime: "",

    year: "",
    sem: "",
    mf: "",

    dropYear: "",
    dropSem: "",
    dropMidfin: "",
    warningStyle: { display: "none" }
  };

  createFunc = data => {
    let tmp = [
      ...data.filter(each => this.state.dropVal.indexOf(each.key) !== -1)
    ];

    return tmp;
  };

  addDate = date => {
    this.setState({ date: date });
  };

  buttonSubmit = () => {
    if (this.state.dropVal.indexOf("stdid") === -1) {
      this.setState({ stdid: "" });
      this.setState({ dropStdid: "" });
    }
    if (this.state.dropVal.indexOf("stdfname") === -1) {
      this.setState({ stdfname: "" });
      this.setState({ dropStdfname: "" });
    }
    if (this.state.dropVal.indexOf("stdlname") === -1) {
      this.setState({ stdlname: "" });
      this.setState({ dropStdlname: "" });
    }
    if (this.state.dropVal.indexOf("room") === -1) {
      this.setState({ room: "" });
      this.setState({ dropRoom: "" });
    }
    if (this.state.dropVal.indexOf("sec") === -1) {
      this.setState({ sec: "" });
      this.setState({ dropSec: "" });
    }
    if (this.state.dropVal.indexOf("course") === -1) {
      this.setState({ course: "" });
      this.setState({ dropCourse: "" });
    }
    if (this.state.dropVal.indexOf("depid") === -1) {
      this.setState({ depid: "" });
      this.setState({ dropDepid: "" });
    }
    if (this.state.dropVal.indexOf("facid") === -1) {
      this.setState({ facid: "" });
      this.setState({ dropFacid: "" });
    }
    if (this.state.dropVal.indexOf("date") === -1) {
      this.setState({ date: "" });
    }
    if (this.state.dropVal.indexOf("time") === -1) {
      this.setState({ time: "" });
      this.setState({ dropTime: "" });
    }
    if (this.state.dropVal.indexOf("year") === -1) {
      this.setState({ year: "" });
      this.setState({ dropYear: "" });
    }
    if (this.state.dropVal.indexOf("sem") === -1) {
      this.setState({ sem: "" });
      this.setState({ dropSem: "" });
    }
    if (this.state.dropVal.indexOf("mf") === -1) {
      this.setState({ mf: "" });
      this.setState({ dropMidfin: "" });
    }
    let check = true;
    for (let i = 0; i < this.state.dropVal.length; i++) {
      if (this.state[this.state.dropVal[i]] === "") {
        check = false;
      }
    }

    if (check) {
      
      this.setState({ warningStyle: { display: "none" } });

      axios
        .post("https://ku-eiqs-backend.herokuapp.com/adminquery", {
          token: this.props.userData.token,
          username: this.props.userData.userdata.name,
          query_data: {
            stdid: this.state.stdid,
            stdfname: this.state.stdfname,
            stdlname: this.state.stdlname,
            room: this.state.room,
            sec: this.state.sec,
            course: this.state.course,
            depid: this.state.depid,
            facid: this.state.facid,
            date: this.state.date,
            time: this.state.time,
            year: this.state.year,
            sem: this.state.sem,
            mf: this.state.mf
          }
        })
        .then(res => {
          console.log("*", res);
          //this.props.filteredData(res);
        });
    } else {
      this.setState({ warningStyle: { display: "block" } });
    }
  };

  render() {
    console.log({
      token: this.props.userData.token,
      username: this.props.userData.userdata.name,
      query_data: {
        stdid: this.state.stdid,
        stdfname: this.state.stdfname,
        stdlname: this.state.stdlname,
        room: this.state.room,
        sec: this.state.sec,
        course: this.state.course,
        depid: this.state.depid,
        facid: this.state.facid,
        date: this.state.date,
        time: this.state.time,
        year: this.state.year,
        sem: this.state.sem,
        mf: this.state.mf
      }
    });
    let data = [
      {
        key: "stdid",
        menuItem: (
          <Menu.Item key="stdid">
            <span>
              Student ID&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.stdid !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="user" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Student ID</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Input
                placeholder="Enter Student Name"
                value={this.state.dropStdid}
                onChange={e => {
                  this.setState({ stdid: e.target.value });
                  this.setState({ dropStdid: e.target.value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "stdfname",
        menuItem: (
          <Menu.Item key="stdfname">
            <span>
              Student First Name&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.stdfname !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="user" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Student First Name</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Input
                placeholder="Enter Student First Name"
                value={this.state.dropStdfname}
                onChange={e => {
                  this.setState({ stdfname: e.target.value });
                  this.setState({ dropStdfname: e.target.value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "stdlname",
        menuItem: (
          <Menu.Item key="stdlname">
            <span>
              Student Last Name&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.stdlname !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="user" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Student Last Name</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Input
                placeholder="Enter Student Last Name"
                value={this.state.dropStdlname}
                onChange={e => {
                  this.setState({ stdlname: e.target.value });
                  this.setState({ dropStdlname: e.target.value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "room",
        menuItem: (
          <Menu.Item key="room">
            <span>
              Room&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.room !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="building" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Room</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Dropdown
                placeholder="Select Room"
                className="backgroundColor:#A5D2FF"
                fluid
                lazyLoad
                search
                selection
                options={Room}
                value={this.state.dropRoom}
                onChange={(e, { value }) => {
                  this.setState({
                    room: value
                  });
                  this.setState({ dropRoom: value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "sec",
        menuItem: (
          <Menu.Item key="sec">
            <span>
              Section&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.sec !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="at" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Section</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Input
                placeholder="Enter Section"
                value={this.state.dropSec}
                onChange={e => {
                  this.setState({ sec: e.target.value });
                  this.setState({ dropSec: e.target.value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "course",
        menuItem: (
          <Menu.Item key="course">
            <span>
              Course&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.course !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="book" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Course</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Dropdown
                placeholder="Subjects"
                className="backgroundColor:#A5D2FF"
                fluid
                lazyLoad
                search
                selection
                minCharacters={1}
                options={SubjectsDrop}
                value={this.state.dropCourse}
                onChange={(e, { value }) => {
                  this.setState({
                    course: {
                      courseid: value,
                      coursename: SubjectsObj[value].name
                    }
                  });
                  this.setState({ dropCourse: value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },

      {
        key: "depid",
        menuItem: (
          <Menu.Item key="depid">
            <span>
              Department&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.depid !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="building outline" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Department</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Dropdown
                placeholder="Select Department"
                className="backgroundColor:#A5D2FF"
                fluid
                lazyLoad
                search
                selection
                options={Dep}
                value={this.state.dropDepid}
                onChange={(e, { value }) => {
                  this.setState({
                    depid: value
                  });
                  this.setState({ dropDepid: value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "facid",
        menuItem: (
          <Menu.Item key="facid">
            <span>
              Faculty&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.facid !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="building outline" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Faculty</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Dropdown
                placeholder="Select Faculty"
                className="backgroundColor:#A5D2FF"
                fluid
                lazyLoad
                search
                selection
                options={Faculty}
                value={this.state.dropFacid}
                onChange={(e, { value }) => {
                  this.setState({
                    facid: value
                  });
                  this.setState({ dropFacid: value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "date",
        menuItem: (
          <Menu.Item key="date">
            <span>
              Date&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.date !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="calendar outline" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Date</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Datepick addDate={this.addDate} />
              <div style={{ marginTop: "1em" }}>
                <h4>
                  {this.state.date === ""
                    ? null
                    : dateFns.format(this.state.date, "ddd DD-MMM-YYYY")}
                </h4>
              </div>
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "time",
        menuItem: (
          <Menu.Item key="time">
            <span>
              Time&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.time !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="clock" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Time</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Dropdown
                placeholder="Select Time"
                className="backgroundColor:#A5D2FF"
                fluid
                lazyLoad
                search
                selection
                options={Time}
                value={this.state.dropTime}
                onChange={(e, { value }) => {
                  this.setState({
                    time: value
                  });
                  this.setState({ dropTime: value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "year",
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
            <div style={{ textAlign: "center" }}>
              <Icon name="calendar alternate outline" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Year</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Dropdown
                placeholder="Select Year"
                fluid
                selection
                options={[
                  {
                    key: "2561",
                    text: "2561",
                    value: "2561"
                  }
                ]}
                value={this.state.dropYear}
                onChange={(e, { value }) => {
                  this.setState({ year: value });
                  this.setState({ dropYear: value });
                }}
              />
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "sem",
        menuItem: (
          <Menu.Item key="sem">
            <span>
              Semester&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.sem !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="calendar alternate outline" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Semester</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
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
            </div>
          </Tab.Pane>
        )
      },
      {
        key: "mf",
        menuItem: (
          <Menu.Item key="mf">
            <span>
              Mid/Final&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.mf !== "" ? (
                <Icon name="check circle" color="green" fitted />
              ) : (
                <Icon name="search" fitted />
              )}
            </span>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane>
            <div style={{ textAlign: "center" }}>
              <Icon name="book" size="huge" />
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <Header>Mid/Final</Header>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
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
            </div>
          </Tab.Pane>
        )
      }
    ];
    return (
      <div>
        <Grid centered>
          <Dropdown
            placeholder="Choose Filter"
            className="backgroundColor:#A5D2FF"
            fluid
            lazyLoad
            multiple
            search
            selection
            options={[
              { key: "stdid", text: "Student ID", value: "stdid" },
              {
                key: "stdfname",
                text: "Student First Name",
                value: "stdfname"
              },
              { key: "stdlname", text: "Student Last Name", value: "stdlname" },
              { key: "room", text: "Room", value: "room" },
              { key: "sec", text: "Section", value: "sec" },
              { key: "course", text: "Course", value: "course" },
              { key: "depid", text: "Department", value: "depid" },
              { key: "facid", text: "Faculty", value: "facid" },
              { key: "date", text: "Date", value: "date" },
              { key: "time", text: "Time", value: "time" },
              { key: "year", text: "Year", value: "year" },
              { key: "sem", text: "Semester", value: "sem" },
              { key: "mf", text: "Mid/Final", value: "mf" }
            ]}
            value={this.state.dropVal}
            onChange={(e, { value }) => {
              this.setState({ dropVal: value });
            }}
          />
          <Grid.Column width={16}>
            <Tab
              style={{ marginTop: "1em" }}
              menu={{ fluid: true, vertical: true, tabular: true }}
              panes={this.createFunc(data)}
              grid={{ paneWidth: 8, tabWidth: 8 }}
            />
          </Grid.Column>
        </Grid>
        <div style={{ textAlign: "center", marginTop: "1em" }}>
          <Message
            style={this.state.warningStyle}
            error
            content="Please complete your chosen filters"
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "1em" }}>
          <Button
            type="submit"
            animated
            onClick={this.buttonSubmit}
            style={{ marginTop: "1em" }}
          >
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>Go!</Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}

export default teacherFilter;
