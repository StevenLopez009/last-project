import { useState } from "react";

const ComponentPortada = ({ titulo, cambiarEstado, backgroundImage }) => {
  const [start, setStart] = useState(false);

  const contenedorStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div className="contenedor contenedor-inicial" style={contenedorStyle}>
      <h2>{titulo}</h2>
      <button className="btn-play" onClick={cambiarEstado}></button>
    </div>
  );
};

export default ComponentPortada;
