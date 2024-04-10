import "./Cuartel.css";
import lifeHero from "../../assets/img/cuartel/lifehero.png";
import damageimg from "../../assets/img/cuartel/damage.png";

const InfoHero = ({
  life,
  damage,
  handleBackHero,
  handleNextHero,
  info,
  link,
}) => {
  return (
    <div className="container-info">
      <div className="container-info-one ">
        <div className="info-child">
          <img src={lifeHero} alt="" />
          <p>{life}</p>
        </div>
        <div className="info-child">
          <img src={damageimg} alt="" />
          <p>{damage}</p>
        </div>
      </div>
      <div className="container-info-two">
        <p>{info}</p>
        <a href={link} target="_blank">
          click aqui
        </a>
      </div>
      <div className="container-buttons">
        <button onClick={handleBackHero}>Back</button>
        <button onClick={handleNextHero}>Next</button>
      </div>
    </div>
  );
};

export default InfoHero;
