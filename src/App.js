import React, {Component} from "react";
import "./App.css";

import  {Routes} from "./Routes.js";

import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class App extends Component{
  render(){
    return (
    <div className = "App Container">
     
        <Navbar bg="light" expand ="lg">
          <Navbar.Brand> 
            <Link to = "/">Fisher Bookstore </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <Nav.Link href="/books">Books</Nav.Link>

              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes></Routes> 
      </div>
    );
  }
}
