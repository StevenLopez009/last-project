import { useState } from "react";
import { Link } from "react-router-dom";

const ComponentFinal = ({ handleShowSection }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };
  return (
    <>
      <img src="" alt="imagen monstruo" />
      {!visible && (
        <div>
          <p>explicacion del monstruo</p>
          <button onClick={handleVisible}>continuar</button>
        </div>
      )}

      {visible && (
        <div>
          <p>explicacion de la prueba</p>
          <img src="" alt="" />
          <input type="text" />
          <button onClick={handleShowSection}>
            <Link to={"/Secciones"}>Pasar a la siguiente seccion</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default ComponentFinal;
