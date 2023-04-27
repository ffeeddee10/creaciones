import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/CartContext";
const CategoryLink = ({ categoryId }) => {
  const { menuItems } = useContext(CartContext);
  console.log(categoryId);
  if (categoryId !== undefined) {
    return (
      <div>
        <ul class="nav_list">
          <li className="nav_item">
            <Link to={"/Tienda"} className="nav_link">
              Ver Todo{" "}
            </Link>
          </li>
          {menuItems
            .filter((menuitem) => menuitem.label !== categoryId)
            .map((item) => (
              <li class="nav_item">
                <Link
                  to={`/producto/${item.label}`}
                  class="nav_link "
                  key={item.id}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul class="nav_list">
          {menuItems
            .filter((menuitem) => menuitem.label !== categoryId)
            .map((item) => (
              <li class="nav_item">
                <Link
                  to={`/producto/${item.label}`}
                  class="nav_link "
                  key={item.id}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
};
export default CategoryLink;
