import PropTypes from "prop-types";
import ComponentLife from "./ComponentLife";

const ComponentQuestion = ({
  pregunta,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  handleAnswer,
  decrementLife,
  life,
}) => {
  return (
    <>
      <ComponentLife decrementLife={decrementLife} life={life} />
      <div>
        <p>{pregunta}</p>
      </div>
      <button onClick={() => handleAnswer(opcion1)}>{opcion1}</button>
      <button onClick={() => handleAnswer(opcion2)}>{opcion2}</button>
      <button onClick={() => handleAnswer(opcion3)}>{opcion3}</button>
      <button onClick={() => handleAnswer(opcion4)}>{opcion4}</button>
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
};

export default ComponentQuestion;
