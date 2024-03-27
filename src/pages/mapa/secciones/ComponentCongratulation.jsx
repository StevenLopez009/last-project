import PropTypes from "prop-types";

const ComponentCongratulation = ({ handleNextQuestion }) => {
  return (
    <>
      <img src="" alt="" />
      <p>Felicidades has respondido bien</p>
      <button onClick={handleNextQuestion}>Psar a la siguiente pregunta</button>
    </>
  );
};

ComponentCongratulation.propTypes = {
  handleNextQuestion: PropTypes.func.isRequired,
};

export default ComponentCongratulation;
