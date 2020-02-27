import React from "react";
import {AuthorCard} from "./AuthorTableRow";
import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props){
    return(
        <div className="display">
            <h3>Authors</h3>
            <CardColumns>
                {props.authors.map(b => (
                    <AuthorCard author={b} key={b.id} />
                ))}
            </CardColumns>
        </div>
    );
}