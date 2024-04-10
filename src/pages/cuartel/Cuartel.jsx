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
      info: `Hola soy la programadora Lyra, tengo varios consejos para ti en tu camino hacia aprender JavaScript. Puedes dirigirte aqui para descargar el milenario libro de JavaScript`,
      link: "https://eloquentjs-es.thedojo.mx/Eloquent_JavaScript.pdf",
    },
    {
      img: heroImage2,
      life: 1500,
      damage: 1800,
      info: "Hola soy Arion , existe un programador legendario llamado Jon Mircha busca su nombre en youtube y sigue su camino  y aprenderas JavaScript",
      link: "https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA",
    },
    {
      img: heroImage3,
      life: 4000,
      damage: 3000,
      info: "Hola soy Ania, todo lenguaje tiene una documentacion aqui te dejare la llave hacia la documentacion  de Javascript ",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
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
              link={currentHero.link}
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
