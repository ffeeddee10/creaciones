import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Navmain from "../NavBar/NavMain";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemDetailList from "./Itmedetaillist";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const { producto } = useContext(CartContext);
  return (
    <>
      <Navmain />
      <div>
        <ItemDetailList producto={producto} id={id} />
      </div>
      <Footer />
    </>
  );
};
export default ItemDetailContainer;
