import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { useParams, Link } from "react-router-dom";
import Navmain from "../../NavBar/NavMain";
import Footer from "../../Footer/Footer";
import CategoryLink from "./CategoryLink";
const Categorypage = () => {
  const { producto } = useContext(CartContext);
  const { category } = useParams();
  return (
    <>
      <Navmain />
      <div className="contador">
        <div className="prodcut_list">
          <div>
            <h3 class="breadcrumb__subtitle">
              Inicio {`>`} Tienda {`>`}
              <span>{category}</span>
            </h3>
            <CategoryLink categoryId={category} />
            <div className="product-container-category">
              {producto
                .filter((product) => product.categoryId == category)
                .map((product) => (
                  <div key={product.id} className="product-box">
                    <div>
                      <img src={product.img} alt={product.title} />
                    </div>
                    <h2 className="title_product">{product.title}</h2>
                    <div className="product-details">
                      <Link
                        to={`/product/${product.id}`}
                        className="button_link"
                      >
                        {" "}
                        Ver detalles del producto
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Categorypage;
