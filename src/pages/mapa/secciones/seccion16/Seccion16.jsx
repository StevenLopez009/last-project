import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion13.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion16 = () => {
  const { setVisibleSixteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "¿Cuál de las siguientes estrategias es una buena práctica para optimizar el rendimiento de JavaScript en una aplicación web?",
      opciones: [
        "Cargar todos los scripts al inicio de la página.",
        "Utilizar archivos JavaScript no minificados.",
        "No utilizar ninguna biblioteca de terceros.",
        "Minimizar y combinar archivos JavaScript",
      ],
      respuestaCorrecta: "Minimizar y combinar archivos JavaScript",
      correction:
        "Minimizar y combinar archivos JavaScript es una buena práctica común para optimizar el rendimiento de una aplicación web. Estas prácticas pueden mejorar la velocidad de carga de la página.",
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada?",
      opciones: ["Asincronía", "Promesas", "Await", "Defer"],
      respuestaCorrecta: "Defer",
      correction:
        "La técnica comúnmente utilizada para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada es colocar el código JavaScript al final del cuerpo del documento HTML o usar el atributo defer en la etiqueta <script>.",
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para cargar recursos, como imágenes y scripts, solo cuando son necesarios en una página web?",
      opciones: [
        "Precarga",
        "Lazy loading",
        "Carga síncrona",
        "Compresión de recursos",
      ],
      respuestaCorrecta: "Lazy loading",
      correction:
        "Lazy loading es una técnica utilizada en desarrollo web para mejorar el rendimiento de una página al retrasar la carga de ciertos recursos hasta que sean necesarios.",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una estrategia para mejorar el rendimiento de una aplicación web?",
      opciones: [
        "Utilizar muchas fuentes de datos externas.",
        "No utilizar caché de recursos.",
        "Reducir las solicitudes de red y minimizar el uso de recursos.",
        "Utilizar imágenes de alta resolución en todas partes.",
      ],
      respuestaCorrecta:
        "Reducir las solicitudes de red y minimizar el uso de recursos.",
      correction:
        "Reducir las solicitudes de red y minimizar el uso de recursos son estrategias clave para optimizar el rendimiento de una aplicación web.",
    },
    {
      pregunta:
        "¿Cuál es una técnica efectiva para reducir la carga inicial de JavaScript en una página web?",
      opciones: [
        "Utilizar el atributo async en las etiquetas de script.",
        "Utilizar el operador new para crear objetos.",
        "Dividir el código en módulos y cargarlos en forma perezosa.",
        "No utilizar comentarios en el código.",
      ],
      respuestaCorrecta:
        "Dividir el código en módulos y cargarlos en forma perezosa.",
      correction:
        "Dividir el código en módulos y cargarlos de forma perezosa (lazy loading) es una estrategia efectiva para optimizar el rendimiento de una aplicación web. Esta técnica permite cargar solo el código necesario para la página actual",
    },
    {
      pregunta:
        "¿Qué estrategia se utiliza para mejorar el rendimiento de una aplicación web al reducir el tiempo de carga de recursos?",
      opciones: [
        "Utilizar compresión de recursos y servidores CDN",
        "Utilizar el motor V8 de Google",
        "Aumentar el tamaño de los recursos multimedia",
        " Habilitar la caché del navegador",
      ],
      respuestaCorrecta: "Utilizar compresión de recursos y servidores CDN",
      correction:
        "Utilizar compresión de recursos y servidores de CDN (Content Delivery Network) son prácticas esenciales para mejorar el rendimiento y la velocidad de carga de una aplicación web.",
    },
    {
      pregunta:
        "vamos a exportar una funcion ya sabes que la palabra clave es export y sabes la estructura de una funcion ",
      opciones: [
        "export { calcularSuma }",
        "export default calcularSuma;",
        "default.export = calcularSuma;",
        "module.export = calcularSuma;",
      ],
      respuestaCorrecta: "export default calcularSuma;",
      correction:
        "En JavaScript, puedes exportar funciones de un módulo utilizando la palabra clave export. Aquí tienes un ejemplo simple:",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una técnica efectiva para reducir el uso de memoria en una aplicación JavaScript?",
      opciones: [
        "Utilizar el método delete para eliminar propiedades de objetos no utilizadas.",
        "No liberar recursos después de su uso.",
        "Utilizar la recursión en lugar de bucles.",
        "Utilizar recursos de gran tamaño.",
      ],
      respuestaCorrecta:
        "Utilizar el método delete para eliminar propiedades de objetos no utilizadas.",
      correction:
        "En JavaScript, el método delete se utiliza para eliminar una propiedad específica de un objeto. Sin embargo, hay algunas consideraciones importantes al usar delete para eliminar propiedades de objetos no utilizadas:",
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para reducir el parpadeo de contenido en una página web durante la carga?",
      opciones: [
        "Añadir animaciones en cascada con codigo css",
        "Utilizar JavaScript para ocultar elementos durante la carga.",
        "Utilizar un preloader (precargador) y CSS para ocultar elementos hasta que estén listos.",
        "Usar el atributo async en todas las etiquetas de script.",
      ],
      respuestaCorrecta:
        "Utilizar un preloader (precargador) y CSS para ocultar elementos hasta que estén listos.",
      correction:
        "El uso de un preloader (precargador) y CSS para ocultar elementos hasta que estén listos es una técnica común para mejorar la experiencia del usuario al cargar una página web",
    },
  ];

  const {
    start,
    showCorrection,
    showCongratulation,
    showFinal,
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
    setVisibleSixteen(true);
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

export default Seccion16;
