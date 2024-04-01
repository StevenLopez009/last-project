import PropTypes from "prop-types";
import victory from "../../../assets/img/mapa/victory.gif";
import "./styles/ComponentCongratulation.css";

const ComponentCongratulation = ({ handleNextQuestion, styleClass }) => {
  return (
    <div className={`congratulation congratulation__${styleClass}`}>
      <img className="congratulation__image" src={victory} alt="" />
      <div className="congratulation__container">
        <p className="congratulation__text">
          Felicidades <br /> has respondido bien
        </p>
        <button
          className="congratulation__button"
          onClick={handleNextQuestion}
        ></button>
      </div>
    </div>
  );
};

ComponentCongratulation.propTypes = {
  handleNextQuestion: PropTypes.func.isRequired,
  styleClass: PropTypes.string,
};

export default ComponentCongratulation;
