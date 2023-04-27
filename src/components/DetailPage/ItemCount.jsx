import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ initial, addItem, price, item }) => {
  const [count, setCount] = useState(initial);
  const [resutl, setResult] = useState(count * price);
  const incrementar = () => {
    if (count < 100) {
      setCount(count + 1);
      setResult((count + 1) * price);
    } else {
      alert("no hay suficientes productos");
    }
  };
  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
      setResult((count - 1) * price);
    }
  };
  return (
    <>
      <div className="itemcount_container">
        <div className="count_box">
          <p className="itemprice">
            <span>$</span>
            {price}
          </p>
          <h3 className="times">x {count}</h3>
          <button className="minus" onClick={decrementar}>
            -
          </button>
          <button className="add" onClick={incrementar}>
            +
          </button>
        </div>
        <div className="itemcount">
          <p>Total:</p>
          <p className="resultado">${resutl}</p>
        </div>
        <div className="button_container">
          <button
            className="product_button fix"
            onClick={() => addItem(item, count, resutl, price)}
          >
            Agregar al carrito
          </button>
          <Link to={"/cart"} className="product_button detial_button">
            Ver Carrito
          </Link>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
