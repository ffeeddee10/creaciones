import React from "react";
import "./header.css";
import img from "./user.jpg";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <h1>Users Api</h1>
            <Link to="/">
                <img src={img} alt="imagen" width="150px" />
            </Link>
        </div>
    );
};

export default Header;
