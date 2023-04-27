import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
const Buypage = () => {
  let [nameValue, setNameValue] = useState("");
  let [phoneValue, setPhoneValue] = useState();
  let [emailValue, setEmailValue] = useState("");
  const { clearItems, items, purchaseitems } = useContext(CartContext);
  if (nameValue && phoneValue && emailValue !== "") {
    return (
      <div className="login_container">
        <div className="login_box">
          <div className="login_title">
            <h3>Datos personales</h3>
            <p>Solo un paso mas antes de tu Compra</p>
          </div>
          <div className="login_details">
            <div>
              <div className="login_flex">
                <div className="login_icon">
                  <i class="bx bxs-user"></i>
                  <p className="login_text">Escribe tu nombre</p>
                </div>
                <input
                  className="login_input"
                  type="text"
                  placeholder="Tu Nombre"
                  required
                  onChange={(event) => setNameValue(event.target.value)}
                />
              </div>
              <div className="login_flex">
                <div className="login_icon">
                  <i class="bx bxs-phone"></i>
                  <p className="login_text">Escribe to numero de telefono</p>
                </div>
                <input
                  className="login_input"
                  type="number"
                  placeholder="Tu Telefono"
                  required="required"
                  onChange={(event) => setPhoneValue(event.target.value)}
                />
              </div>
              <div className="login_flex">
                <div className="login_icon">
                  <i class="bx bxl-gmail"></i>
                  <p className="login_text">Escribe tu mail</p>
                </div>
                <input
                  className="login_input"
                  type="email"
                  placeholder="Tu "
                  required="required"
                  onChange={(event) => setEmailValue(event.target.value)}
                />
              </div>
            </div>
            <div className="login_buttons">
              <button
                className="product_button arr"
                onClick={() =>
                  purchaseitems(items, nameValue, phoneValue, emailValue)
                }
              >
                Enviar compra
              </button>
              <button className="product_button arr" onClick={clearItems}>
                Cancelar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login_container">
        <div className="login_box">
          <div className="login_title">
            <h3>Datos personales</h3>
            <p>Solo un paso mas antes de tu Compra</p>
          </div>
          <div className="login_details">
            <div>
              <div className="login_flex">
                <div className="login_icon">
                  <i class="bx bxs-user"></i>
                  <p className="login_text">Escribe tu nombre</p>
                </div>
                <input
                  className="login_input"
                  type="text"
                  placeholder="Tu Nombre"
                  required
                  onChange={(event) => setNameValue(event.target.value)}
                />
              </div>
              <div className="login_flex">
                <div className="login_icon">
                  <i class="bx bxs-phone"></i>
                  <p className="login_text">Escribe to numero de telefono</p>
                </div>
                <input
                  className="login_input"
                  type="number"
                  placeholder="Tu Telefono"
                  required="required"
                  onChange={(event) => setPhoneValue(event.target.value)}
                />
              </div>
              <div className="login_flex">
                <div className="login_icon">
                  <i class="bx bxl-gmail"></i>
                  <p className="login_text">Escribe tu mail</p>
                </div>
                <input
                  className="login_input"
                  type="email"
                  placeholder="Tu Email"
                  required="required"
                  onChange={(event) => setEmailValue(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Buypage;
