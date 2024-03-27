import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="div-splash">
      <img src={logo} alt="Logo" className="logo-inicio" loading="lazy" />
      <Link to="/Menu" className="link-inicio">
        <button className="btn-inicio"></button>
      </Link>
    </div>
  );
};

export default Inicio;
