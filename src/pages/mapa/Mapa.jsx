import { useState } from "react";
import ComponentPortada from "../ComponentPortada";
import backgroundImage from "../../assets/img/mapa/mapa.jpg";
import ComponentSections from "./ComponentSections";

const Mapa = () => {
  const [start, setStart] = useState(false);

  const cambiarEstado = () => {
    setStart(true);
  };

  const titulo = "Mapa";
  return (
    <>
      {start ? (
        <ComponentSections />
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

export default Mapa;
