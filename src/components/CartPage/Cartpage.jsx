import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Buypage from "./Buypage";
import Footer from "../Footer/Footer";
import Navmain from "../NavBar/NavMain";

const CartPage = () => {
  const { items, removeItem, itemsInCart } = useContext(CartContext);
  if (itemsInCart == 0) {
    return (
      <>
        <Navmain />
        <div className="container">
          <div className="cart_title">
            <h1>Tu Carrito:</h1>
          </div>
          <div className="empty_cart">
            <div>
              <h3>Tu Carrito esta vacio</h3>
            </div>
            <div>
              <button>
                {" "}
                <Link to={"/Tienda"} className="link_empty">
                  Ver Productos
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  if (itemsInCart > 0) {
    return (
      <>
        <Navmain />
        <div className="container">
          <div className="cart_title">
            <h1>Tu Carrito:</h1>
          </div>
          <div>
            {items.map((item) => (
              <div className="cart_container" key={item.id}>
                <div className="cart_img_box">
                  <img src={item.img} alt={item.name} className="cart_img" />
                </div>
                <div className="cart_info_box">
                  <div className="cart_name_box">
                    <h1>{item.name}</h1>
                    <h2>
                      <span>Precio:</span> ${item.price}
                    </h2>
                  </div>
                  <div className="cart_name_box">
                    <h2 className="cart_cantidad">
                      <span>Cantidad:</span> {item.qty}
                    </h2>
                    <h2>
                      <span>Total:</span> ${item.result}
                    </h2>
                  </div>
                  <h2
                    className="cart_button"
                    onClick={() => removeItem(item.id)}
                  >
                    Borrar Producto
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <Buypage />
        </div>
        <Footer />
      </>
    );
  } else {
    alert("error");
  }
};
export default CartPage;
