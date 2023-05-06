import React, { createContext, useState } from "react";
import swal from "sweetalert";
import { addRef, colRef, sendOrder } from "../Firebase/Firebase";
import { getDocs } from "firebase/firestore";
const CartContext = createContext({});
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addItems, setAddItems] = useState([]);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const isIncart = (id) => {
    const found = items.find((item) => item.id == id);
    return found;
  };
  const menuItems = [
    {
      id: "2",
      label: "Abrigos",
    },
    {
      id: "3",
      label: "Sweaters",
    },
    {
      id: "5",
      label: "Bufandas",
    },
  ];
  const navbarItems = [
    {
      id: "1",
      label: "Inicio",
    },
    {
      id: "2",
      label: "Tienda",
    },
    {
      id: "4",
      label: "Sobre nosotros",
    },
  ];
  const addItem = (item, count, result) => {
    isIncart(item.id)
      ? setItems(
          items.map((prod) => {
            if (prod.id == item.id) {
              prod.qty += count;
              prod.result += result;
            }
            return prod;
          })
        )
      : setItems([
          ...items,
          {
            id: item.id,
            img: item.img,
            result: result,
            name: item.title,
            price: item.price,
            qty: count,
          },
        ]);
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const clearItems = () => {
    setItems([]);
  };
  const purchaseitems = (items, nameValue, phoneValue, emailValue) => {
    sendOrder(items, nameValue, phoneValue, emailValue);
    setItems([]);
    swal({
      title: "Compra realizada",
      text: "Gracias por tu compra",
      icon: "success",
      button: "Continuar",
    });
  };
  let itemsInCart = 0;
  items.forEach((element) => {
    itemsInCart = itemsInCart + element.qty;
    console.log(items);
  });
  if (loading == true) {
    getDocs(colRef)
      .then((snp) => {
        setProducto(snp.docs.map((doc) => ({ ...doc.data() })));
      })
      .finally(() => {
        setLoading(false);
      });
  }
  if (loading == false) {
    console.log("pedido realizado");
  }
  if (loadingAdd == true) {
    getDocs(addRef)
      .then((snp) => {
        setAddItems(snp.docs.map((doc) => ({ ...doc.data() })));
      })
      .finally(() => {
        setLoadingAdd(false);
      });
  }
  if (loadingAdd == false) {
    console.log("pedido realizado");
  }
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        purchaseitems,
        itemsInCart,
        producto,
        loading,
        menuItems,
        navbarItems,
        loadingAdd,
        addItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
