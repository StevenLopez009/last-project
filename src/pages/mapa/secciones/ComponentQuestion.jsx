import PropTypes from "prop-types";
import ComponentLife from "./ComponentLife";
import ComponentDeath from "./ComponentDeath";
import "./styles/ComponentQuestion.css";

const ComponentQuestion = ({
  pregunta,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  handleAnswer,
  decrementLife,
  life,
  styleClass,
  imagen,
}) => {
  const blockName = "component-question";

  return (
    <>
      {life > 0 ? (
        <div className={`${blockName}__${styleClass}`}>
          <ComponentLife decrementLife={decrementLife} life={life} />
          <div className={`${blockName}__content `}>
            <img className={`${blockName}__image`} src={imagen} alt="" />
            <p className={`${blockName}__text ${styleClass}`}>{pregunta}</p>
          </div>
          <div className={`${blockName}__wrapper `}>
            <button
              className={`${blockName}__button ${styleClass}`}
              onClick={() => handleAnswer(opcion1)}
            >
              {opcion1}
            </button>
            <button
              className={`${blockName}__button ${styleClass}`}
              onClick={() => handleAnswer(opcion2)}
            >
              {opcion2}
            </button>
            <button
              className={`${blockName}__button ${styleClass}`}
              onClick={() => handleAnswer(opcion3)}
            >
              {opcion3}
            </button>
            <button
              className={`${blockName}__button ${styleClass}`}
              onClick={() => handleAnswer(opcion4)}
            >
              {opcion4}
            </button>
          </div>
        </div>
      ) : (
        <ComponentDeath />
      )}
    </>
  );
};

ComponentQuestion.propTypes = {
  pregunta: PropTypes.string.isRequired,
  opcion1: PropTypes.string.isRequired,
  opcion2: PropTypes.string.isRequired,
  opcion3: PropTypes.string.isRequired,
  opcion4: PropTypes.string.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  decrementLife: PropTypes.func.isRequired,
  life: PropTypes.number.isRequired,
  styleClass: PropTypes.string,
};

export default ComponentQuestion;