import { useState } from "react";
import ComponentPortada from "../ComponentPortada";
import backgroundImage from "../../assets/img/cuartel/Cuartel.jpg";

const Cuartel = () => {
  const [start, setStart] = useState(false);

  const cambiarEstado = () => {
    setStart(true);
  };

  const titulo = "Cuartel";
  return (
    <>
      {start ? (
        <h1>contenido cuartel</h1>
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

export default Cuartel;
