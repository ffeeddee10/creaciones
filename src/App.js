import "./App.css";
// importo el dom de react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importo mis componentes
//import Header from "./components/Header/Header";
import Navegar from "./components/Navegar/Navegar";
//import footer from "./components/footer/footer";

// importo las paginas creadas
import Inicio from "./pages/Inicio/Inicio";
import Tortas from "./pages/Tortas/Tortas";
import Box from "./pages/Box/Box";
import Galletitas from "./pages/Galletitas/Galletitas";
import Contacto from "./pages/Contacto/Contacto";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navegar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tortas" element={<Tortas />} />
          <Route path="/box" element={<Box />} />
          <Route path="/galletitas" element={<Galletitas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;