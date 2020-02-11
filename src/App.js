import React, {Component} from "react";
import "./App.css";

import  "./Routes.js";

import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class App extends Component{
  render(){
    return (
    <div className = "App Container">
     
        <Navbar bg="light" expand ="lg">
          <Navbar.Brand> 
            <Link to = "/">Fisher Bookstore </Link>
          </Navbar.Brand>
        </Navbar>
        <Routes />
      </div>
    );
  }
}
