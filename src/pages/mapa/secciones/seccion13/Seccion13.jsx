import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion13.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon13.gif";
import codigo from "../../../../assets/img/mapa/codigo13.jpg";

const Seccion13 = () => {
  const { setVisibleFourteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a Frameworks aqui emergen islas que expanden la isla de JS, dime con cuál de estos crearías aplicaciones moviles.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811301/lastproject/seccion13/qfiyaxs4znwxkqp8exge.png",
      opciones: ["python Mobile", "Java Mobile", "React Native", "HJ7"],
      respuestaCorrecta: "React Native",
      correction:
        "React Native es un marco de desarrollo de código abierto creado por Facebook que permite construir aplicaciones móviles utilizando React y JavaScript.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705436142/lastproject/seccion13/jlpstqpzenaohwjkpuxx.png",
    },
    {
      pregunta:
        "Los frameworks son como islas mas pequeñas que expanden la isla de su lenguaje Que framework JS es mantenido por Facebook para crear aplicaciones de una sola página",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811301/lastproject/seccion13/qfiyaxs4znwxkqp8exge.png",
      opciones: ["React", "Vue.js", "Backbone.js", "Angular"],
      respuestaCorrecta: "React",
      correction:
        "React es una biblioteca de JavaScript de código abierto desarrollada por Facebook que se utiliza para construir interfaces de usuario (UI) interactivas y eficientes",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705436217/lastproject/seccion13/bdkxgklecf0innni2mha.webp",
    },
    {
      pregunta:
        "Las librerias  aveces son mas pequeñas que los frameworks y añaden funcionalidad al lenguaje o lo facilitan .Espero que conozcas la libreria de Js para crear graficos y visualizar datos",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811301/lastproject/seccion13/qfiyaxs4znwxkqp8exge.png",
      opciones: ["jQuery", "D3.js", "React", "Express.js"],
      respuestaCorrecta: "D3.js",
      correction:
        "D3.js, abreviatura de 'Data-Driven Documents', es una biblioteca JavaScript que facilita la manipulación y visualización de datos en documentos web.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705436312/lastproject/seccion13/gcvibww0obct7twnyj64.png",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es un framework de JavaScript para el desarrollo de aplicaciones web en tiempo real?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811302/lastproject/seccion13/nyjgnmcqiriegwnahs3s.png",
      opciones: ["Socket.io", "Django", "Sprint", "Ruby.js"],
      respuestaCorrecta: "Socket.io",
      correction:
        "Socket.io es una librería esencial para el desarrollo de aplicaciones en tiempo real, proporcionando una capa de abstracción sobre WebSockets y otros métodos de transporte, y facilitando la creación de aplicaciones interactivas y colaborativas",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705437177/lastproject/seccion13/ncmy5uselosqyeqodzzt.jpg",
    },
    {
      pregunta:
        "Que librería Js se puede utilizar para hacer peticiones Http y comunicarse con servicios web.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811301/lastproject/seccion13/qfiyaxs4znwxkqp8exge.png",
      opciones: ["Axios", "Fetch API", "JQuery", "Todas las anteriores"],
      respuestaCorrecta: "Todas las anteriores",
      correction:
        "fetch, axios, y jQuery son herramientas comúnmente utilizadas para realizar peticiones HTTP en aplicaciones web.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705436415/lastproject/seccion13/jywfvfjjrhftnd9o7zcd.jpg",
    },
    {
      pregunta:
        "Vas bien, espero que tengas las vidas para continuar , dime el framework mantenido por google basado en componentes.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811302/lastproject/seccion13/nyjgnmcqiriegwnahs3s.png",
      opciones: ["React", "Angular", "Ember.js", "Backbone.js"],
      respuestaCorrecta: "Angular",
      correction:
        "Angular es un marco de desarrollo frontend completo que proporciona una estructura sólida para construir aplicaciones web escalables y mantenibles. Su enfoque en componentes, tipado estático con TypeScript y herramientas integradas",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705437255/lastproject/seccion13/x28oa40wuzlsoc9xsd68.webp",
    },
    {
      pregunta:
        "Con las librerias puedes hacer pruebas a tu codigo una dime cual te funcionaria para esto",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811302/lastproject/seccion13/nyjgnmcqiriegwnahs3s.png",
      opciones: ["Mocha", "Chai", "Jasmine", "Todas las anteriores"],
      respuestaCorrecta: "Todas las anteriores",
      correction:
        "con Mocha, Chai y Jasmine son librerias que te ayudan hacer pruebas a tu codigo ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705437375/lastproject/seccion13/zhwhr4izn23h4p6l4xfe.jpg",
    },
    {
      pregunta:
        "Una pwa es una página adaptable a móvil con cuál Framework de js lo crearias.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811304/lastproject/seccion13/eidbis7scvcncmbhu8ad.png",
      opciones: ["Node", "Django", "Vue.js", "Axios"],
      respuestaCorrecta: "Vue.js",
      correction:
        "Vue.js es un marco de desarrollo web flexible y progresivo que destaca por su sencillez y facilidad de integración. Es una opción popular para desarrolladores que buscan construir aplicaciones web interactivas de manera eficiente.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705437473/lastproject/seccion13/rzkjpewdugsy0eo6pwlw.jpg",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una librería de JavaScript para el manejo de rutas en aplicaciones de una sola página (SPA)?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811304/lastproject/seccion13/eidbis7scvcncmbhu8ad.png",
      opciones: ["javascript routes", "Router Java", "React Router", "Ninguna"],
      respuestaCorrecta: "React Router",
      correction:
        "React Router es una librería de navegación para React que permite gestionar el enrutamiento en aplicaciones de una sola página (SPA). Facilita la creación de rutas en la aplicación y la manipulación de la interfaz de usuario según la URL",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705437658/lastproject/seccion13/jppnaxbzsbomvxdysbza.jpg",
    },
  ];

  const textoMonstruo =
    "Viajero has llegado muy lejos en busca de tu reina si te sirve de algo tu reina a sido llevada por los orcos a los mares lejanos donde planean hacer un ritual con ella , responde mi codigo y te dejare navegar ";
  const prueba = "¿Cual es este framework de JavaScript ?";
  const respuesta = "angular";

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
        styleClass={"thirteen"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"thirteen"}
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
        styleClass={"thirteen"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleFourteen(true);
  };

  const titulo = "Frameworks y librerias";

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

export default Seccion13;
