import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Books from "./books/Books";
import {BrowserRouter as Router} from "react-router-dom";
import Authors from "./authors/Authors";

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/authors" component={Authors} />
        </Switch>
    );
}
