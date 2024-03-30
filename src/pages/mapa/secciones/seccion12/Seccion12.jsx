import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion12.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion12 = () => {
  const { setVisibleThirteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a las Herramientas , de estas existe una  utilizada para depurar aplicaciones en JS",
      opciones: ["Excel", "Notepad++", "Android", " Blog Note"],
      respuestaCorrecta: "Notepad++",
      correction:
        "Notepad++ es ampliamente utilizado por desarrolladores y usuarios que necesitan un editor de texto liviano pero poderoso con características específicas para la programación y edición de código fuente",
    },
    {
      pregunta:
        "Esta herramienta es muy utilizada cuando trabajas en equipo para el control de versiones ",
      opciones: ["Node.js", "Git", "Webpack", "jQuery"],
      respuestaCorrecta: "Git",
      correction:
        "Git es un sistema de control de versiones distribuido y de código abierto que se utiliza para rastrear cambios en el código fuente durante el desarrollo de software.",
    },
    {
      pregunta:
        "Una de estas herramientas es utilizada para administrar paquetes y dependencias en JS",
      opciones: ["NPM", "Babel", "Yalt", "ESLint"],
      respuestaCorrecta: "NPM",
      correction:
        "npm es una herramienta esencial en el ecosistema de Node.js que facilita la gestión de dependencias, la instalación de paquetes y la ejecución de scripts en proyectos de JavaScript y Node.js.",
    },
    {
      pregunta:
        "Me sorprende que estés aquí. Existe una herramienta para formatear y analizar tu código en busca de errores de sintaxis. ¿La conoces?",
      opciones: ["Excel", "Node", "ESLint", "Blog Note"],
      respuestaCorrecta: "ESLint",
      correction:
        "ESLint es una herramienta de linting para JavaScript. Su función principal es analizar el código fuente en JavaScript y señalar patrones problemáticos o áreas donde el código podría mejorarse según las reglas configuradas.",
    },
    {
      pregunta:
        "Pronto llegarás a las tierras de los frameworks. Hay una herramienta de desarrollo para la creación de proyectos de React. Dime, ¿cuál es?",
      opciones: ["Parcel", "Grunt", "Gulp", "Vite"],
      respuestaCorrecta: "Vite",
      correction:
        "Vite es un entorno de desarrollo para aplicaciones web modernas construido sobre tecnologías como Vue.js (también compatible con React y otras librerías/frameworks).",
    },
    {
      pregunta:
        "Cuando terminas un proyecto con esta herramienta lo podras empaquetar y optimizar para entregarlo a produccion",
      opciones: ["NPM", "Webpack", "Babel", "Gulp"],
      respuestaCorrecta: "Webpack",
      correction:
        "Webpack es una herramienta potente para la construcción y empaquetado de aplicaciones web modernas, ofreciendo una forma eficiente de gestionar dependencias, procesar archivos y optimizar el código para su entrega en producción.",
    },
    {
      pregunta:
        "La isla JS tiene un entorno de desarrollo del lado del servidor¿cuál es?",
      opciones: ["Node.js", "Visual Studio Code", "ESLint", "React"],
      respuestaCorrecta: "Node.js",
      correction:
        "Node.js es una plataforma versátil que ha transformado la forma en que se desarrollan aplicaciones del lado del servidor, permitiendo a los desarrolladores utilizar JavaScript de manera efectiva para crear aplicaciones escalables y eficientes en tiempo real.",
    },
    {
      pregunta:
        "Dos herramientas más llegaremos al jefe, aquí hay una herramienta para escribir pruebas unitarias y de integración. ",
      opciones: ["Pentium", "Axios", "Mocha", "Java"],
      respuestaCorrecta: "Mocha",
      correction:
        "Mocha es una herramienta potente y versátil para la realización de pruebas en JavaScript, proporcionando un marco robusto para la escritura y ejecución de pruebas en diversos entornos y estilos de desarrollo.",
    },
    {
      pregunta:
        "Ultima herramienta, esta se utiliza para administrar múltiples versiones de Node. en un sistema.",
      opciones: ["NPM", "Yarn", "Webpack", "NVM"],
      respuestaCorrecta: "NVM",
      correction:
        "NVM es una herramienta útil para desarrolladores que trabajan en proyectos que pueden requerir versiones específicas de Node.js. Facilita la gestión y el cambio entre diferentes versiones de Node.js en un sistema, proporcionando flexibilidad y coherencia en el desarrollo",
    },
  ];

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
    const { pregunta, opciones } = getCurrentQuestion();
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
      />
    );
  };

  const renderCongratulation = () => {
    return <ComponentCongratulation handleNextQuestion={handleNextQuestion} />;
  };

  const renderCorrection = () => {
    const { correction } = getCurrentQuestion();
    return (
      <ComponentCorrection
        correction={correction}
        handleNextQuestion={handleNextQuestion}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleThirteen(true);
  };

  const titulo = "Portal Fetch";

  return (
    <>
      {start ? (
        showCorrection ? (
          renderCorrection()
        ) : showCongratulation ? (
          renderCongratulation()
        ) : showFinal ? (
          <ComponentFinal handleShowSection={handleShowSection} />
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
