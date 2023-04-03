import "./App.css";
// importo el dom de react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importo mis componentes
import Header from "./components/header/header";
import Nav from "./components/nav/nav";

// importo las paginas creadas
import index from "./pages/index/index";
import tortas from "./pages/tortas/tortas";
import box from "./pages/box/box";
import galletitas from "./pages/galletitas/galletitas";
import contacto from "./pages/contacto/contacto";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<index />} />
          <Route path="/tortas" element={<tortas />} />
          <Route path="/box" element={<box />} />
          <Route path="/galletitas" element={<galletitas />} />
          <Route path="/contacto" element={<contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;