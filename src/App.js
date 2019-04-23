import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";

import Search from "./components/Search";
import ListImport from "./components/List";
//import Login from "./components/Login";
import {SubjectsObj} from './components/subjectsObj';
import { List } from 'semantic-ui-react'

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
  
  AddSec = (secs,keys) =>{
    
    for(var i=0 ; i<this.state.data.length ; i++){
      if(this.state.data[i].key===keys){
          this.state.data[i].sec=secs
          console.log(this.state.data[i])
      }
    }
    console.log('#')
    console.log(this.state.data)
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
       <List divided selection verticalAlign='middle' size="massive"> 
       <ListImport res={this.state.data} AddSec={this.AddSec} />
       </List>
       
      
       
      </div>
    );
  }
}

export default App;
