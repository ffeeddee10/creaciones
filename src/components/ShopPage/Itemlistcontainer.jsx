import React, { useContext } from "react";
import ItemList from "./Itemlist";
import CartContext from "../../context/CartContext";
import Navmain from "../NavBar/NavMain";
import Footer from "../Footer/Footer";
const ItemListContainer = () => {
  const { loading, producto } = useContext(CartContext);
  return (
    <>
      <Navmain />
      <div className="contador">
        <div className="prodcut_list">
          {loading ? <span>Loading...</span> : <ItemList products={producto} />}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ItemListContainer;
