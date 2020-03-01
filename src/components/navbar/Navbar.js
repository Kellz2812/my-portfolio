import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import '../../views/Home/App';

export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/"> 
                <i className="fas fa-home fa-2x"></i>
                <a href='#about'>About Me</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/kelly-watson-40817031/"><i className="fab fa-linkedin-in fa-2x"></i></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/Kellz2812"><i className="fab fa-github fa-2x"></i></NavLink>
                </NavItem>                
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }