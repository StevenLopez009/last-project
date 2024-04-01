import PropTypes from "prop-types";
import defeat from "../../../assets/img/mapa/defeat.gif";
import "./styles/ComponentCorrection.css";

const ComponentCorrection = ({
  correction,
  handleNextQuestion,
  imagenCorreccion,
  styleClass,
}) => {
  return (
    <div className={`correction correction__${styleClass}`}>
      <img className="correction__image" src={defeat} alt="" />
      <div className="correction__content">
        <p className="correction__text">{correction}</p>
      </div>
      <img src={imagenCorreccion} alt="" className="correction__code" />
      <button
        className="correction__button"
        onClick={handleNextQuestion}
      ></button>
    </div>
  );
};

ComponentCorrection.propTypes = {
  correction: PropTypes.string.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
  imagenCorreccion: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
};
export default ComponentCorrection;
