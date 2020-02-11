import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";


ReactDOM.render(
<Router>
    <App />
</Router>,
 document.getElementById("root")
 );
