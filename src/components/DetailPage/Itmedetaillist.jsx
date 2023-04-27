import React from "react";
import ItemDetailinfo from "./ItemDetailinfo";
import { Link } from "react-router-dom";
const ItemDetailList = ({ producto, id }) => {
  return (
    <div>
      <div className="icon_detail">
        <Link to={"/Tienda"} class="bx bxs-left-arrow icon_item"></Link>
      </div>
      {producto
        .filter((product) => product.id == id)
        .map((product) => (
          <ItemDetailinfo key={product.id} product={product} />
        ))}
    </div>
  );
};
export default ItemDetailList;
