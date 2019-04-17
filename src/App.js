import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";
import dummyText from "./DummyText";
import Search from "./components/Search";
import Login from "./components/Login";

class App extends Component {
  
  state={
    
  }
  handleChange = (e, { value }) => this.setState({value})

  
  
  render() {
    const { value } = this.state;
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
          value={value}
          onChange={this.handleChange}
        />
        <Login />
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
