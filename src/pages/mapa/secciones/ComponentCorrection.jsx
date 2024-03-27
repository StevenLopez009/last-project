import PropTypes from "prop-types";

const ComponentCorrection = ({ correction, handleNextQuestion }) => {
  return (
    <>
      <div>{correction}</div>
      <button onClick={handleNextQuestion}>
        pasar a la siguiente pregunta
      </button>
    </>
  );
};

ComponentCorrection.propTypes = {
  correction: PropTypes.string.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
};
export default ComponentCorrection;
