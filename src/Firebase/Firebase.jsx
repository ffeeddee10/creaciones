import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDT73nFLwqqNL0qTKyJcM3RBFWG4ZZPaps",
  authDomain: "coderhouse-ecommerce-80aea.firebaseapp.com",
  projectId: "coderhouse-ecommerce-80aea",
  storageBucket: "coderhouse-ecommerce-80aea.appspot.com",
  messagingSenderId: "1087391971998",
  appId: "1:1087391971998:web:cec35c3f0a3965e330198f",
  measurementId: "G-XFQDLNQF1D"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const colRef = collection(db, "items");
export const addRef = collection(db, "add");
export const sendOrder = (item, nameValue, phoneValue, emailValue) => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const order = {
    buyer: [{ name: nameValue, phoneNumbre: phoneValue, email: emailValue }],
    items: item,
  };
  addDoc(ordersCollection, order).then(console.log(order));
};
