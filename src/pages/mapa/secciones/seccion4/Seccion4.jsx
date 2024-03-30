import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion4.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion4 = () => {
  const { setVisibleFive } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a la ciudadela de los objetos espero que sepas ¿Qué es un objeto en JavaScript?",
      opciones: [
        "Una función que realiza tareas específicas.",
        "Una colección de propiedades y métodos relacionados.",
        "Una variable que almacena un único valor.",
        "Un operador de comparación",
      ],
      respuestaCorrecta: "Una colección de propiedades y métodos relacionados.",
      correction:
        "En JavaScript, un objeto es una estructura de datos que permite almacenar y organizar información. Los objetos en JavaScript son colecciones de pares clave-valor, donde cada clave (también llamada propiedad) está asociada a un valor.",
    },
    {
      pregunta:
        "Ya sabes que es un objeto, pero necesitó que busques una propiedad dentro de él ¿como lo harías?",
      opciones: [
        "Usando paréntesis ().",
        "Usando corchetes [].",
        "Usando el operador de módulo (%).",
        "Usando el operador de suma (+).",
      ],
      respuestaCorrecta: "Usando corchetes [].",
      correction:
        "Puedes buscar una propiedad en un objeto en JavaScript utilizando la notación de corchetes. La notación de corchetes te permite acceder a una propiedad de un objeto mediante una expresión dentro de corchetes []",
    },
    {
      pregunta:
        "Existe en la ciudadela una notación para acceder a las propiedades de los objetos¿ cuál es?",
      opciones: [
        "Notación de asterisco (objeto*propiedad).",
        "Notación de paréntesis (objeto(propiedad)).",
        "Notación de llaves (objeto{propiedad}).",
        "Notación de punto (objeto.propiedad).",
      ],
      respuestaCorrecta: "Notación de punto (objeto.propiedad).",
      correction:
        "La notación del punto en objetos es una forma de acceder a las propiedades y métodos de un objeto en JavaScript. Esta notación utiliza un punto . seguido del nombre de la propiedad o método que se quiere acceder. Aquí hay una breve explicación:.",
    },
    {
      pregunta:
        "Ya sabes que es un objeto, dime ahora que es una propiedad, si quieres seguir avanzando ",
      opciones: [
        "Una función que realiza una tarea específica.",
        "Un valor asociado a una clave en un objeto.",
        "Un tipo de bucle.",
        "Una declaración condicional.",
      ],
      respuestaCorrecta: "Un valor asociado a una clave en un objeto.",
      correction:
        "Una propiedad es una asociación entre un nombre (también llamado clave o identificador) y un valor que está almacenado en un objeto. Los objetos en JavaScript son colecciones de pares clave-valor, y cada par clave-valor en un objeto representa una propiedad.",
    },
    {
      pregunta:
        "Estás avanzando mucho, mi jefe se molestará conmigo dime ¿Cuál de los siguientes métodos se utiliza para eliminar una propiedad de un objeto?",
      opciones: ["Remove", "Erase", "Delete", "Drop"],
      respuestaCorrecta: "Delete",
      correction:
        "El método delete en JavaScript se utiliza para eliminar una propiedad de un objeto. La sintaxis básica es la siguiente:",
    },
    {
      pregunta:
        "Ya has llegado hasta aquí es tiempo de que crees un objeto ¿Cómo lo harías?",
      opciones: [
        "Mediante una declaración de variable.",
        "Utilizando la palabra clave new.",
        "Con el constructor new Object",
        "Todas las anteriores.",
      ],
      respuestaCorrecta: "Todas las anteriores.",
      correction:
        "puedes crear un objeto mediante la declaracion de una variable, utilizando la palabra clave new , con la funcion Object.create()",
    },
    {
      pregunta: "Ya has creado un objeto ahora como agregarías una propiedad",
      opciones: [
        "Utilizando la palabra clave add.()",
        "Usando la notación de punto.",
        "Usando la notación de corchetes.",
        "Utilizando el método addProperty().",
      ],
      respuestaCorrecta: "Usando la notación de corchetes.",
      correction:
        "Para agregar o modificar una propiedad de un objeto en JavaScript utilizando corchetes, puedes usar la notación de corchetes [ ]. Aquí te muestro cómo hacerlo:",
    },
    {
      pregunta:
        "No quiero que molestes a mi jefe así que te tengo esta tarea ¿ cuál es la forma en que verificas si un objeto tiene una propiedad?",
      opciones: [
        "Utilizando if (propiedad in objeto).",
        "Utilizando if (objeto have propiedad).",
        "Utilizando if (objeto.propiedad === function property).",
        "Utilizando if (objeto has property).",
      ],
      respuestaCorrecta: "Utilizando if (propiedad in objeto).",
      correction:
        "Para verificar si un objeto tiene una propiedad específica, puedes utilizar el operador in",
    },
    {
      pregunta:
        "Ya has creado objetos, propiedades, y sabes como verificarlas espero que conozcas que es un método en un objeto",
      opciones: [
        "Una función que realiza operaciones matemáticas.",
        "Una propiedad que almacena datos.",
        "Una función que está asociada a un objeto y realiza acciones específicas.",
        "Una variable que almacena valores numéricos.",
      ],
      respuestaCorrecta:
        "Una función que está asociada a un objeto y realiza acciones específicas.",
      correction:
        "En el contexto de objetos en programación, un método es una función que está asociada a un objeto en particular. En JavaScript, los métodos son propiedades de objetos que tienen valores de tipo función. ",
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
    setVisibleFive(true);
  };

  const titulo = "Fuego y funciones";

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

export default Seccion4;
