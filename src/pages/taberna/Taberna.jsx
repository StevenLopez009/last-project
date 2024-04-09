import { useState } from "react";
import ComponentPortada from "../ComponentPortada";
import backgroundImage from "../../assets/img/taberna/taberna.jpg";
import premiounoImg from "../../assets/img/taberna/premiouno.png";
import premiodosImg from "../../assets/img/taberna/premiodos.png";
import premiotresImg from "../../assets/img/taberna/premiotres.png";
import premiocuatroImg from "../../assets/img/taberna/premiocuatro.png";
import "./Taberna.css";
import { useSections } from "../mapa/context/SectionContext";

const Taberna = () => {
  const [start, setStart] = useState(false);
  const { visibleFive } = useSections();
  const { visibleNine } = useSections();
  const { visibleThirteen } = useSections();
  const { visibleFifteen } = useSections();

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
              {visibleFive ? (
                <div className="premio premio-1">
                  <img src={premiounoImg} alt="" />
                  <h4>Premio Basico</h4>
                </div>
              ) : null}
              {visibleNine ? (
                <div className="premio premio-2">
                  <img src={premiodosImg} alt="" />
                  <h4>Premio Intermedio</h4>
                </div>
              ) : null}
              {visibleThirteen ? (
                <div className="premio premio-3">
                  <img src={premiotresImg} alt="" />
                  <h4>Premio Avanzado</h4>
                </div>
              ) : null}
              {visibleFifteen ? (
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
