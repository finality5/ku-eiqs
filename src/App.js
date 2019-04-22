import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";
import dummyText from "./DummyText";
import Search from "./components/Search";
import List from "./components/List";
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
        
       <List />
       <List />
       
      </div>
    );
  }
}

export default App;
