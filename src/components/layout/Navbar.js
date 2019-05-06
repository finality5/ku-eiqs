import React, { Component } from "react";
import logo from "../../book.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container } from "semantic-ui-react";
import './Nav.css'
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
        
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
            
          />
          <Container fluid>
          <div style={{marginLeft:"20px"}} >
          <h1>KU EiQS</h1>
          </div>
          </Container>
          <Container fluid textAlign="justified">
          <ul className="nav-items App">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Add / LogIn
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Exam Schedule
              </Link>
            </li>
            
          </ul>
          </Container>
        </div>
      </nav>
    );
  }
}
