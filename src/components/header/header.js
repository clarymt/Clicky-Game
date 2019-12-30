
import React from "react";
import "./Header.css";

const Header = props => (


    <nav class="col-xl fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="title" class="navbar-brand" href="#">{props.children}</a>
        <a className="scores" class="navbar-brand" href="#">Score: {props.score} Highscore: {props.highscore}</a>
    </nav>


);


export default Header;