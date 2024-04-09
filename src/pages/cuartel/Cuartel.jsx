import { useState } from "react";
import ComponentPortada from "../ComponentPortada";
import backgroundImage from "../../assets/img/cuartel/Cuartel.jpg";
import InfoHero from "./InfoHero";
import heroImage1 from "../../assets/img/cuartel/heroe.png";
import heroImage2 from "../../assets/img/cuartel/hero2.png";
import heroImage3 from "../../assets/img/cuartel/hero3.png";
import "./Cuartel.css";

const Cuartel = () => {
  const [start, setStart] = useState(false);

  const cambiarEstado = () => {
    setStart(true);
  };

  const titulo = "Cuartel";

  const heroes = [
    {
      img: heroImage1,
      life: 2000,
      damage: 2000,
      info: "Lyra. Armada con una espada que reluce , esta Programadora intrépida desafía la marea de sombras que amenaza con consumir su mundo. Lyra, vestida en una armadura que fusiona las artes misticas de JavaScript",
    },
    {
      img: heroImage2,
      life: 1500,
      damage: 1800,
      info: "Conocido como Arion, este intrépido Programador, marcado por la valentía y la nobleza. Su mirada intensa refleja la determinación forjada en incontables batallas, mientras empuña una espada imbuida con el poder ancestral de JavaScript",
    },
    {
      img: heroImage3,
      life: 4000,
      damage: 3000,
      info: "Aria dotada de habilidades sobresalientes y una determinación inquebrantable, se erige como una Programadora poderosa, recordándonos que incluso en la adversidad más sombría se puede codificar ",
    },
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const currentHero = heroes[currentHeroIndex];

  const handleNextHero = () => {
    setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroes.length);
  };

  const handleBackHero = () => {
    setCurrentHeroIndex(
      (prevIndex) => (prevIndex - 1 + heroes.length) % heroes.length
    );
  };

  return (
    <>
      {start ? (
        <>
          <div className="container-secundario">
            <div className="container-hero">
              <img src={currentHero.img} />
            </div>
            <InfoHero
              life={currentHero.life}
              damage={currentHero.damage}
              handleBackHero={handleBackHero}
              handleNextHero={handleNextHero}
              info={currentHero.info}
            />
          </div>
        </>
      ) : (
        <ComponentPortada
          titulo={titulo}
          cambiarEstado={cambiarEstado}
          backgroundImage={backgroundImage}
        />
      )}
    </>
  );
};

export default Cuartel;
