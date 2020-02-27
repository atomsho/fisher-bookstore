import React, {Component} from "react";
import "./Authors";
import { AuthorDisplay } from "./AuthorDisplay.js";

export default class Authors extends Component{
    constructor(props){
        super(props);
        this.state={
            authors: [
                {
                    id:1,
                    name: "Eric Evans"
                },
                {
                    id:2,
                    name: "Nicole Forsgren"
                },
                {
                    id:3,
                    name: "Chip Heath"
                },
                {
                    id:4,
                    name: "Gary Chapman"
                },
                {
                    id:5,
                    name: "McGraw Hill"
                },
                {
                    id:6,
                    name: "Walter Rudin"
                },
                {
                    id:7,
                    name: "Damodar Gujarati"
                },
                {
                    id:8,
                    name: "Stephen Ross"
                }
            ]
        }

    };
    render(){
        return (
    <div className="Authors">
        <div className="lander">
            <AuthorDisplay authors={this.state.authors} />
        </div>
    </div>
    );
}
}