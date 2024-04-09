import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles/ComponentQuestion.css";
import reloj from "../../../assets/img/mapa/reloj.png";
import calavera from "../../../assets/img/mapa/calavera.png";

const ComponentLife = ({ life, styleClass }) => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          return 30;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`progreso ${styleClass}`}>
      <img src={reloj} alt="" className="reloj" />
      <div className="progreso-div-time">
        <h2>{time} Segundos</h2>
      </div>
      <div className="progreso-div-live">
        <h2>{life} Vidas</h2>
      </div>
      <img src={calavera} className="calavera" alt="calavera" />
    </div>
  );
};

ComponentLife.propTypes = {
  life: PropTypes.number.isRequired,
  styleClass: PropTypes.string,
};

export default ComponentLife;
