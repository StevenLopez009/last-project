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
  styleClass,
}) => {
  const [visible, setVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

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
      <div className="monster">
        <div className={`monster__div monster__${styleClass}`}>
          <img className="monster__image" src={jefe} alt="imagen monstruo" />
        </div>
        {!visible && (
          <>
            <div className="monster__contain__text">
              <p className="monster__text">{textoMonstruo}</p>
            </div>
            <div className="monster__contain__button">
              <button className="monster__button" onClick={handleVisible}>
                continuar
              </button>
            </div>
          </>
        )}
        {visible && !isCorrect && (
          <div className="challenge">
            <div className="challenge__content__text">
              <p className="challenge__text">{prueba}</p>
            </div>
            <img className="challenge__code" src={codigo} alt="" />
            <input
              className="challenge__input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              className="challenge__verify-button"
              onClick={checkAnswer}
            ></button>
          </div>
        )}
        {isCorrect && visible && (
          <div className="challenge__success">
            <div className="challenge__parrafo">
              <p>Has superado mi prueba</p>
            </div>
            <Link to={"/Secciones"}>
              <button
                className="challenge__next-button"
                onClick={handleShowSection}
              ></button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ComponentFinal;
