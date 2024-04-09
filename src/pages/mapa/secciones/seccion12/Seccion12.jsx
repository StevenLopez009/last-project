import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion12.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon12.gif";
import codigo from "../../../../assets/img/mapa/codigo12.jpg";
import { usePremio } from "../../context/PremioContext";

const Seccion12 = () => {
  const { premioThree } = usePremio();
  const { setVisibleThirteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a las Herramientas , de estas existe una  utilizada para depurar aplicaciones en JS",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811156/lastproject/seccion12/w2acjdutmpfzui79rrao.png",
      opciones: ["Excel", "Notepad++", "Android", " Blog Note"],
      respuestaCorrecta: "Notepad++",
      correction:
        "Notepad++ es ampliamente utilizado por desarrolladores y usuarios que necesitan un editor de texto liviano pero poderoso con características específicas para la programación y edición de código fuente",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705432477/lastproject/seccion12/jmysgbpolmon5qquvoiy.png",
    },
    {
      pregunta:
        "Esta herramienta es muy utilizada cuando trabajas en equipo para el control de versiones ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811156/lastproject/seccion12/w2acjdutmpfzui79rrao.png",
      opciones: ["Node.js", "Git", "Webpack", "jQuery"],
      respuestaCorrecta: "Git",
      correction:
        "Git es un sistema de control de versiones distribuido y de código abierto que se utiliza para rastrear cambios en el código fuente durante el desarrollo de software.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705432551/lastproject/seccion12/oltkm9xrw0geskbzoy3t.png",
    },
    {
      pregunta:
        "Una de estas herramientas es utilizada para administrar paquetes y dependencias en JS",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811156/lastproject/seccion12/w2acjdutmpfzui79rrao.png",
      opciones: ["NPM", "Babel", "Yalt", "ESLint"],
      respuestaCorrecta: "NPM",
      correction:
        "npm es una herramienta esencial en el ecosistema de Node.js que facilita la gestión de dependencias, la instalación de paquetes y la ejecución de scripts en proyectos de JavaScript y Node.js.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705432627/lastproject/seccion12/ogxtyotzrfmd9h1e8txy.png",
    },
    {
      pregunta:
        "Me sorprende que estés aquí. Existe una herramienta para formatear y analizar tu código en busca de errores de sintaxis. ¿La conoces?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811158/lastproject/seccion12/melhffx3ab7csusowk5b.png",
      opciones: ["Excel", "Node", "ESLint", "Blog Note"],
      respuestaCorrecta: "ESLint",
      correction:
        "ESLint es una herramienta de linting para JavaScript. Su función principal es analizar el código fuente en JavaScript y señalar patrones problemáticos o áreas donde el código podría mejorarse según las reglas configuradas.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705432752/lastproject/seccion12/ajbgfuypngw3bcqhgu6c.png",
    },
    {
      pregunta:
        "Pronto llegarás a las tierras de los frameworks. Hay una herramienta de desarrollo para la creación de proyectos de React. Dime, ¿cuál es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811158/lastproject/seccion12/melhffx3ab7csusowk5b.png",
      opciones: ["Parcel", "Grunt", "Gulp", "Vite"],
      respuestaCorrecta: "Vite",
      correction:
        "Vite es un entorno de desarrollo para aplicaciones web modernas construido sobre tecnologías como Vue.js (también compatible con React y otras librerías/frameworks).",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705432828/lastproject/seccion12/vm2vhdaamjdvdbggpwlp.png",
    },
    {
      pregunta:
        "Cuando terminas un proyecto con esta herramienta lo podras empaquetar y optimizar para entregarlo a produccion",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811158/lastproject/seccion12/melhffx3ab7csusowk5b.png",
      opciones: ["NPM", "Webpack", "Babel", "Gulp"],
      respuestaCorrecta: "Webpack",
      correction:
        "Webpack es una herramienta potente para la construcción y empaquetado de aplicaciones web modernas, ofreciendo una forma eficiente de gestionar dependencias, procesar archivos y optimizar el código para su entrega en producción.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705432914/lastproject/seccion12/wtrv9qncs7pmbmnpqljg.jpg",
    },
    {
      pregunta:
        "La isla JS tiene un entorno de desarrollo del lado del servidor¿cuál es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811158/lastproject/seccion12/melhffx3ab7csusowk5b.png",
      opciones: ["Node.js", "Visual Studio Code", "ESLint", "React"],
      respuestaCorrecta: "Node.js",
      correction:
        "Node.js es una plataforma versátil que ha transformado la forma en que se desarrollan aplicaciones del lado del servidor, permitiendo a los desarrolladores utilizar JavaScript de manera efectiva para crear aplicaciones escalables y eficientes en tiempo real.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705433005/lastproject/seccion12/jkl4pjm3azcmiyxcrhat.png",
    },
    {
      pregunta:
        "Dos herramientas más llegaremos al jefe, aquí hay una herramienta para escribir pruebas unitarias y de integración. ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811161/lastproject/seccion12/syllhy4hz8zktu7gxg51.png",
      opciones: ["Pentium", "Axios", "Mocha", "Java"],
      respuestaCorrecta: "Mocha",
      correction:
        "Mocha es una herramienta potente y versátil para la realización de pruebas en JavaScript, proporcionando un marco robusto para la escritura y ejecución de pruebas en diversos entornos y estilos de desarrollo.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705433097/lastproject/seccion12/vj0ujq8afsqpkslqv4qf.svg",
    },
    {
      pregunta:
        "Ultima herramienta, esta se utiliza para administrar múltiples versiones de Node. en un sistema.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811161/lastproject/seccion12/syllhy4hz8zktu7gxg51.png",
      opciones: ["NPM", "Yarn", "Webpack", "NVM"],
      respuestaCorrecta: "NVM",
      correction:
        "NVM es una herramienta útil para desarrolladores que trabajan en proyectos que pueden requerir versiones específicas de Node.js. Facilita la gestión y el cambio entre diferentes versiones de Node.js en un sistema, proporcionando flexibilidad y coherencia en el desarrollo",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705435909/lastproject/seccion12/q03pslkairtzv2qnfc32.png",
    },
  ];

  const textoMonstruo =
    "soy el herrero los orcos me compraron muchas armas si me ayudas con mi condigo te dejare ir a los mares de sirenas donde llevaron a tu reina";
  const prueba = "Cual es este entorno de desarrollo para react";
  const respuesta = "vite";

  const {
    start,
    life,
    showCorrection,
    showCongratulation,
    showFinal,
    decrementLife,
    cambiarEstado,
    handleAnswer,
    handleNextQuestion,
    getCurrentQuestion,
  } = useQuiz(preguntas);

  const renderQuestion = () => {
    const { pregunta, opciones, imagen } = getCurrentQuestion();
    return (
      <ComponentQuestion
        pregunta={pregunta}
        opcion1={opciones[0]}
        opcion2={opciones[1]}
        opcion3={opciones[2]}
        opcion4={opciones[3]}
        handleAnswer={handleAnswer}
        decrementLife={decrementLife}
        life={life}
        styleClass={"twelve"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"twelve"}
      />
    );
  };

  const renderCorrection = () => {
    const { correction, imagenCorreccion } = getCurrentQuestion();
    return (
      <ComponentCorrection
        correction={correction}
        handleNextQuestion={handleNextQuestion}
        imagenCorreccion={imagenCorreccion}
        styleClass={"twelve"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleThirteen(true);
  };

  const titulo = "Herramientas";

  return (
    <>
      {start ? (
        showCorrection ? (
          renderCorrection()
        ) : showCongratulation ? (
          renderCongratulation()
        ) : showFinal ? (
          <ComponentFinal
            handleShowSection={handleShowSection}
            jefe={jefe}
            textoMonstruo={textoMonstruo}
            codigo={codigo}
            prueba={prueba}
            respuesta={respuesta}
            premioThree={premioThree}
          />
        ) : (
          renderQuestion()
        )
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

export default Seccion12;
