import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion14.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion14 = () => {
  const { setVisibleFifteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Un nuevo estándar es una nueva versión,  con JS llegó un nuevo estándar para gestión de módulos, ¿cual es?",
      opciones: [
        "ES6 (ECMAScript 2015)",
        "CommonJS",
        "AMD (Asynchronous Module Definition)",
        "UMD (Universal Module Definition)",
      ],
      respuestaCorrecta: "ES6 (ECMAScript 2015)",
      correction:
        "ECMAScript 2015, también conocido como ES6 (ECMAScript 6), es la sexta edición de la especificación ECMAScript, que es el estándar subyacente de JavaScript. adiciones han mejorado significativamente la legibilidad, expresividad y estructura del código JavaScript",
    },
    {
      pregunta:
        "Hay una palabra clave para enviar funciones , objeto o variables desde un módulo a otro, ¿cuál es?",
      opciones: ["Import", "Send", "Export", "Require"],
      respuestaCorrecta: "Export",
      correction:
        "La palabra clave que se utiliza para exportar funciones, objetos o variables desde un módulo en JavaScript/ECMAScript es export. Puedes utilizar export junto con import en otros archivos para importar esas funciones, objetos o variables.",
    },
    {
      pregunta:
        "Del mismo modo, hay una palabra clave para traer las funciones, objetos o variables que has exportado de otro módulo. ¿Cuál es?",
      opciones: ["Import", "Module", "Export", "Require"],
      respuestaCorrecta: "Import",
      correction:
        "La palabra clave export se utiliza para exponer elementos (variables, funciones, objetos, etc.) desde un módulo, mientras que import se utiliza para importar esos elementos en otro archivo",
    },
    {
      pregunta:
        "Hacer el código en bloques de código independientes tiene un objetivo: ¿cuál es?",
      opciones: [
        "Minimizar el uso de funciones.",
        "Evitar el reuso de código.",
        "Organizar y modularizar el código de una aplicación",
        "Facilitar la creacion de errores.",
      ],
      respuestaCorrecta: "Organizar y modularizar el código de una aplicación",
      correction:
        "Dividir el código en bloques de código independientes mejora la reutilización, mantenibilidad, escalabilidad y colaboración en un proyecto de desarrollo de software.",
    },
    {
      pregunta:
        "Ya sabes que es un módulo existe uno muy utilizado en entornos de servidor como Node.",
      opciones: ["ES6", "CommonJS", "AMD", "UMD"],
      respuestaCorrecta: "CommonJS",
      correction:
        "CommonJS es un sistema y una especificación para la modularización de código en JavaScript fuera del navegador. Fue desarrollado inicialmente para ser utilizado en entornos de servidor, como Node.js, pero también ha influido en la forma en que se organizan los módulos en el lado del cliente",
    },
    {
      pregunta: "Ya sabes varias características de los módulos dime una.",
      opciones: [
        "Solo son compatibles con navegadores modernos.",
        "No permiten la exportación e importación de variables",
        "No son ampliamente utilizados en desarrollo web.",
        "Ninguna de las anteriores",
      ],
      respuestaCorrecta: "Ninguna de las anteriores",
      correction:
        "El uso de módulos es una práctica esencial en el desarrollo de software moderno, ya que contribuye a la creación de sistemas más robustos, mantenibles y flexibles. son compatibles con navegadores modernos , permiten la exportacion e importacion , son muy utilizados en desarrollo web",
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
        "Seguimos viendo características buenas de los módulos, dime cuál de estas es cierta.",
      opciones: [
        "Los módulos ES6 son evaluados de manera perezosa",
        "Los módulos ES6 no permiten la importación condicional de código.",
        "Los módulos ES6 no permiten la exportación de funciones anónimas.",
        "Los módulos ES6 no pueden tener dependencias externas.",
      ],
      respuestaCorrecta: "Los módulos ES6 son evaluados de manera perezosa",
      correction:
        "La evaluación perezosa, también conocida como 'carga bajo demanda' o 'lazy loading', se refiere a la práctica de diferir la carga y evaluación de módulos hasta que se necesiten en tiempo de ejecución. ",
    },
    {
      pregunta:
        "Una última característica de los módulos es una de estas, dime ¿cuál ?",
      opciones: [
        "Uso exclusivo en el desarrollo de aplicaciones móviles.",
        "Inclusión de módulos sin una gestión adecuada de dependencias.",
        "Organización del código en unidades lógicas y reutilizables.",
        "Dependencia de una conexión a Internet para cargar módulos.",
      ],
      respuestaCorrecta:
        "Organización del código en unidades lógicas y reutilizables.",
      correction:
        "Los módulos permiten reutilizar funciones, objetos y variables en diferentes partes de una aplicación o incluso en proyectos diferentes. Esto reduce la duplicación de código y acelera el desarrollo.",
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
    setVisibleFifteen(true);
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

export default Seccion14;
