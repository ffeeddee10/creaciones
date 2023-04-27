import React, { useContext } from "react";
import CategoryLink from "./CategoryPage/CategoryLink";
import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <div>
      <h3 class="breadcrumb__subtitle">
        Inicio {`>`} <span>Tienda</span>
      </h3>
      <CategoryLink />
      <div className="product-container">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default ItemList;
