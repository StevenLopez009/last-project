import { Link } from "react-router-dom";
import imagenHeroe from "../../assets/img/heroe.png";
import audio from "../../assets/audio/audio.mp3";
import music from "../../assets/audio/music.mp3";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [ver, setVer] = useState(() => {
    const storedValue = localStorage.getItem("ver");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  const [playSound] = useSound(audio);
  const [playMusic, { stop }] = useSound(music, { volume: 0.5 });
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleMusicClick = () => {
    if (!musicPlaying) {
      playMusic();
      setMusicPlaying(true);
    } else {
      stop();
      setMusicPlaying(false);
    }
  };

  const handleContinuar = () => {
    setTimeout(() => {
      setVer(false);
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem("ver", JSON.stringify(ver));
  }, [ver]);

  return (
    <>
      <header className="header">
        <div className="header__perfil"></div>
        <div className="header__info">
          <div className="header__info-title">
            <h4>Isla JavaScript</h4>
          </div>
          <div className="header__info-nivel">
            <h5>Nivel</h5>
            <progress value="00" max="100"></progress>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="contenedor-botones">
          <button onClick={handleMusicClick} className="boton boton--music">
            <span className="boton__texto">MUSICA</span>
          </button>
          <Link to="/Biblioteca" className="boton boton--biblioteca">
            <span className="boton__texto">TEMPLO</span>
          </Link>
          <Link to="/Cuartel" className="boton boton--cuartel">
            <span className="boton__texto">CUARTEL</span>
          </Link>
          <Link to="/Mapa" className="boton boton--mapa">
            <span className="boton__texto">MAPA</span>
          </Link>
          <Link to="/Taberna" className="boton boton--taberna">
            <span className="boton__texto">TABERNA</span>
          </Link>
        </div>
        <div
          className={`contenedor-heroe ${
            ver ? "" : "contenedor-heroe--oculto"
          }`}
        >
          <div className="texto-heroe">
            <p>
              Hola jugador <br /> bienvenido, <br /> visita la biblioteca <br />
              para aprender visita <br /> el cuartel para <br /> desbloquear los
              personaje <br />
              visita la taberna <br /> para mirar tus logros y compartirlos con{" "}
              <br /> tus amigos, cuando <br /> estes listo sarpa <br /> a la
              aventura desde <br /> el mapa
            </p>
            <button
              onClick={handleContinuar}
              className="boton boton--continuar"
            >
              Continuar
            </button>
            <button onClick={playSound} className="boton boton--escuchar">
              Escuchar
            </button>
          </div>
          <img
            src={imagenHeroe}
            alt=""
            className="contenedor-heroe__imagen"
            loading="lazy"
          />
        </div>
      </main>

      <footer className="footer">
        <Link to="/Biblioteca" className="btn btn--one">
          <div className="btn__text">TEMPLO</div>
        </Link>
        <Link to="/Cuartel" className="btn btn--two">
          <div className="btn__text">CUARTEL</div>
        </Link>
        <Link to="/Mapa" className="btn btn--three">
          <div className="btn__text">MAPA</div>
        </Link>
        <Link to="/Taberna" className="btn btn--four">
          <div className="btn__text">TABERNA</div>
        </Link>
      </footer>
    </>
  );
};

export default Menu;
