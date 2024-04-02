import { useState } from "react";
import ComponentPortada from "../ComponentPortada";
import backgroundImage from "../../assets/img/taberna/taberna.jpg";
import premiounoImg from "../../assets/img/taberna/premiouno.png";
import premiodosImg from "../../assets/img/taberna/premiodos.png";
import premiotresImg from "../../assets/img/taberna/premiotres.png";
import premiocuatroImg from "../../assets/img/taberna/premiocuatro.png";
import "./Taberna.css";

const Taberna = () => {
  const [start, setStart] = useState(false);
  const [premiouno, setPremiouno] = useState(true);
  const [premiodos, setPremiodos] = useState(true);
  const [premiotres, setPremiotres] = useState(true);
  const [premiocuatro, setPremiocuatro] = useState(true);

  const cambiarEstado = () => {
    setStart(true);
  };

  const titulo = "Taberna";
  return (
    <>
      {start ? (
        <div className="contenedor-secundario-taberna">
          <div className="contenedor-perfil"></div>
          <div className="contenedor-premios">
            <div className="div-order">
              {premiouno ? (
                <div className="premio premio-1">
                  <img src={premiounoImg} alt="" />
                  <h4>Premio Basico</h4>
                </div>
              ) : null}
              {premiodos ? (
                <div className="premio premio-2">
                  <img src={premiodosImg} alt="" />
                  <h4>Premio Intermedio</h4>
                </div>
              ) : null}
              {premiotres ? (
                <div className="premio premio-3">
                  <img src={premiotresImg} alt="" />
                  <h4>Premio Avanzado</h4>
                </div>
              ) : null}
              {premiocuatro ? (
                <div className="premio premio-4">
                  <img src={premiocuatroImg} alt="" />
                  <h4>Premio Legenda</h4>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <ComponentPortada
          titulo={titulo}
          cambiarEstado={cambiarEstado}
          backgroundImage={backgroundImage}
        />
      )}
    </>
  );
};

export default Taberna;
