import React from "react";
import "./headercss.css";
import img from "./logo2.png";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <h1>Creaciones</h1>
            <Link to="/">
                <img src={img} alt="imagen" width="150px" />
            </Link>
        </div>
    );
};

export default Header;
