import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import CartContext from "../../context/CartContext";
const ItemDetailinfo = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { img, title, details, price, stock } = product;
  return (
    <div className="continer_detail_product">
      <img className="img_detail" src={img} alt={title} />
      <div className="detail_container">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p className="detail_detail">{details}</p>
          <div className="detail_box">
            <ItemCount
              item={product}
              stock={stock}
              initial={1}
              addItem={addItem}
              price={price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetailinfo;
