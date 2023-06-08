import "./styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import profileImage from "./logo.jpg"; // Ruta de la foto de perfil

const Nav = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to="/" className="Link">
          <div className="ImageContainer">
            <img src={profileImage} alt="Profile" className="ProfileImage" />
          </div>
          Home
        </Link>
        <Link to="/about" className="Link">
          About
        </Link>
        <Link to="/contact" className="Link">
          Contact
        </Link>
        <Link to="/" className="Link">
          <FontAwesomeIcon icon={faShoppingCart} /> {/* Agrega el icono de carrito */}
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
