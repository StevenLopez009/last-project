import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/ComponentFinal.css";

const ComponentFinal = ({
  handleShowSection,
  jefe,
  textoMonstruo,
  codigo,
  prueba,
  respuesta,
}) => {
  const [visible, setVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleVisible = () => {
    setVisible(true);
  };

  const checkAnswer = () => {
    if (userInput.trim().toLowerCase() === respuesta.trim().toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <>
      {!visible && (
        <div className="monster">
          <img className="monster__image" src={jefe} alt="imagen monstruo" />
          <p className="monster__text">{textoMonstruo}</p>
          <button className="monster__button" onClick={handleVisible}>
            continuar
          </button>
        </div>
      )}

      {visible && (
        <div className="challenge">
          <img className="challenge__image" src={jefe} alt="" />
          <p className="challenge__text">{prueba}</p>
          <img className="challenge__code" src={codigo} alt="" />
          <input
            className="challenge__input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="challenge__verify-button" onClick={checkAnswer}>
            Verificar respuesta
          </button>
          {isCorrect && (
            <div className="challenge__success">
              <p>Has superado mi prueba</p>
              <button
                className="challenge__next-button"
                onClick={handleShowSection}
              >
                <Link to={"/Secciones"}>Pasar a la siguiente seccion</Link>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ComponentFinal;
