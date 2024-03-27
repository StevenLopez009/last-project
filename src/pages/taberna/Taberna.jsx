import { useState } from "react";
import ComponentPortada from "../ComponentPortada";
import backgroundImage from "../../assets/img/taberna/taberna.jpg";

const Taberna = () => {
  const [start, setStart] = useState(false);

  const cambiarEstado = () => {
    setStart(true);
  };

  const titulo = "Taberna";
  return (
    <>
      {start ? (
        <h1>contenido taberna</h1>
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
