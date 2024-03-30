import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion13.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion13 = () => {
  const { setVisibleFourteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a Frameworks aqui emergen islas que expanden la isla de JS, dime con cuál de estos crearías aplicaciones moviles.",
      opciones: ["python Mobile", "Java Mobile", "React Native", "HJ7"],
      respuestaCorrecta: "React Native",
      correction:
        "React Native es un marco de desarrollo de código abierto creado por Facebook que permite construir aplicaciones móviles utilizando React y JavaScript.",
    },
    {
      pregunta:
        "Los frameworks son como islas mas pequeñas que expanden la isla de su lenguaje Que framework JS es mantenido por Facebook para crear aplicaciones de una sola página",
      opciones: ["React", "Vue.js", "Backbone.js", "Angular"],
      respuestaCorrecta: "React",
      correction:
        "React es una biblioteca de JavaScript de código abierto desarrollada por Facebook que se utiliza para construir interfaces de usuario (UI) interactivas y eficientes",
    },
    {
      pregunta:
        "Las librerias  aveces son mas pequeñas que los frameworks y añaden funcionalidad al lenguaje o lo facilitan .Espero que conozcas la libreria de Js para crear graficos y visualizar datos",
      opciones: ["jQuery", "D3.js", "React", "Express.js"],
      respuestaCorrecta: "D3.js",
      correction:
        "D3.js, abreviatura de 'Data-Driven Documents', es una biblioteca JavaScript que facilita la manipulación y visualización de datos en documentos web.",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es un framework de JavaScript para el desarrollo de aplicaciones web en tiempo real?",
      opciones: ["Socket.io", "Django", "Sprint", "Ruby.js"],
      respuestaCorrecta: "Socket.io",
      correction:
        "Socket.io es una librería esencial para el desarrollo de aplicaciones en tiempo real, proporcionando una capa de abstracción sobre WebSockets y otros métodos de transporte, y facilitando la creación de aplicaciones interactivas y colaborativas",
    },
    {
      pregunta:
        "Que librería Js se puede utilizar para hacer peticiones Http y comunicarse con servicios web.",
      opciones: ["Axios", "Fetch API", "JQuery", "Todas las anteriores"],
      respuestaCorrecta: "Todas las anteriores",
      correction:
        "fetch, axios, y jQuery son herramientas comúnmente utilizadas para realizar peticiones HTTP en aplicaciones web.",
    },
    {
      pregunta:
        "Vas bien, espero que tengas las vidas para continuar , dime el framework mantenido por google basado en componentes.",
      opciones: ["React", "Angular", "Ember.js", "Backbone.js"],
      respuestaCorrecta: "Angular",
      correction:
        "Angular es un marco de desarrollo frontend completo que proporciona una estructura sólida para construir aplicaciones web escalables y mantenibles. Su enfoque en componentes, tipado estático con TypeScript y herramientas integradas",
    },
    {
      pregunta:
        "Con las librerias puedes hacer pruebas a tu codigo una dime cual te funcionaria para esto",
      opciones: ["Mocha", "Chai", "Jasmine", " Todas las anteriores"],
      respuestaCorrecta: " Todas las anteriores",
      correction:
        "con Mocha, Chai y Jasmine son librerias que te ayudan hacer pruebas a tu codigo ",
    },
    {
      pregunta:
        "Una pwa es una página adaptable a móvil con cuál Framework de js lo crearias.",
      opciones: ["Node", "Django", "Vue.js ", "Axios"],
      respuestaCorrecta: "Mocha",
      correction:
        "Vue.js es un marco de desarrollo web flexible y progresivo que destaca por su sencillez y facilidad de integración. Es una opción popular para desarrolladores que buscan construir aplicaciones web interactivas de manera eficiente.",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una librería de JavaScript para el manejo de rutas en aplicaciones de una sola página (SPA)?",
      opciones: ["javascript routes", "Router Java", "React Router", "Ninguna"],
      respuestaCorrecta: "React Router",
      correction:
        "React Router es una librería de navegación para React que permite gestionar el enrutamiento en aplicaciones de una sola página (SPA). Facilita la creación de rutas en la aplicación y la manipulación de la interfaz de usuario según la URL",
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
    setVisibleFourteen(true);
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

export default Seccion13;
