import React, {Component} from "react";
import "./Books";
import { BookDisplay } from "./BookDisplay.js";

export default class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books: [
                {
                    id:1,
                    title:"Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id:2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id:3,
                    title: "The Power of Moments",
                    author: "Chip Heath",
                    isbn: "978-1501147760"
                },
                {
                    id:4,
                    title: "The 5 Love Languages",
                    author: "Gary Chapman",
                    isbn: "978-0802412706"
                },
                {
                    id:5,
                    title: "A Guide to Wellness",
                    author: "McGraw Hill",
                    isbn: "978-0026515627"
                },
                {
                    id:6,
                    title: "Mathematical Analysis",
                    author: "Walter Rudin",
                    isbn: "978-0070542358"
                },
                {
                    id:7,
                    title: "Basic Econometrics",
                    author: "Damodar Gujarati",
                    isbn: "978-0072478525"
                },
                {
                    id:8,
                    title: "Corporate Finance",
                    author: "Stephen Ross",
                    isbn: "978-0072829204"
                }

            ]
        };
    }

    render(){
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                 </div>
            </div>
    );
}
}
