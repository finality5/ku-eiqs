import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";
import dummyText from "./DummyText";
import Search from "./components/Search";
//import Login from "./components/Login";
import {SubjectsObj} from './components/subjectsObj';

class App extends Component {
  
  state={
    data:[],
    Dropdownvalue:[]
    
  }
  handleChange = (e, { value }) => {
    let tmp = []
    for(var i=0 ; i<value.length ; i++){
      tmp.push(SubjectsObj[value[i]])
    }
    this.setState({data:tmp})
    this.setState({Dropdownvalue:value})
  }
  

  
  
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
        <Search 
          value={this.state.Dropdownvalue}
          onChange={this.handleChange}
        />
        
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Header id="ez" />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
       
      </div>
    );
  }
}

export default App;
