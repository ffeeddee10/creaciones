import "./navcss.css";

import { Link } from "react-router-dom";

const Navegar = () => {
    return (
        <nav className="Navigation">
            <ul className="List-ul">
                <Link className="Link" to="/">
                    index
                </Link>
                <Link className="Link" to="/Tortas">
                    tortas
                </Link>
                <Link className="Link" to="/Galletitas">
                    galletitas
                </Link>
                <Link className="Link" to="/Box">
                    box
                </Link>
                <Link className="Link" to="/Contacto">
                    Contacto
                </Link>
            </ul>
        </nav>
    );
};

export default Navegar;