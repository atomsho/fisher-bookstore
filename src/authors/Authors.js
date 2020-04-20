import React, {Component} from "react";
import "./Authors";
import { AuthorDisplay } from "./AuthorDisplay.js";

export default function Authors(props){
    const [data, setData] =useState([]);
    
    useEffect(() => {
        fetch("https://localhost:5001/api/books/")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
    
    render(){
        return (
    <div className="Authors">
        <div className="lander">
            <AuthorDisplay authors={data} />
        </div>
    </div>
    );
}
}