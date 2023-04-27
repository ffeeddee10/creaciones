import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
const NavBar = () => {
  const { navbarItems } = useContext(CartContext);
  return (
    <ul class="nav_list">
      {navbarItems.map((item) => (
        <li class="nav_item">
          <Link to={`/${item.label}`} class="nav-link" key={item.id}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavBar;
