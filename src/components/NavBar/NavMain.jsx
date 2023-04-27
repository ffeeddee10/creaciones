import React, { useState } from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

import logo from '../../img/logo.jpg';
const Navmain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <Link to={`/Inicio`} class="nav_logo">
          {" "}
          <img className="branch__img" src={logo} alt="urvanna handmade" srcSet=""/>
          <h1>Urvanna Handmade</h1>
        </Link>
        <div class="nav_menu" id="nav-menu" aria-menu={menuOpen}>
          <div class="nav_close" id="nav-close">
            <i class="bx bx-x" onClick={() => setMenuOpen(!menuOpen)}></i>
          </div>
          <NavBar />
        </div>
        <div class="nav_btns">
          <CartWidget />
          <div
            class="nav_toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i class="bx bx-menu"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navmain;