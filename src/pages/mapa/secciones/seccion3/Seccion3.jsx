import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion3.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion3 = () => {
  const { setVisibleFour } = useSections();

  const preguntas = [
    {
      pregunta:
        "Para crear una funcion necesitas saber su forma ningun novato puede crear funciones ¿Cual es la forma correcta?",
      opciones: [
        "fun myFunction() =>codigo de la funcion {parametros}",
        "function = myFunction(parametros) {codigo de la funcion}",
        "declarar function = myFunction() {parametros}",
        "function myFunction() {} =>codigo de la funcion",
      ],
      respuestaCorrecta:
        "function = myFunction(parametros) {codigo de la funcion}",
      correction:
        "Una función en JavaScript es un bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes de un programa. Las funciones ayudan a organizar y modularizar el código, facilitando su mantenimiento y comprensión.",
    },
    {
      pregunta:
        "talves no seas tan novato con las funciones , lo pondre un poco mas dificil como se llaman los valores que van en los parentesis de la funcion",
      opciones: ["pass", "argument", "parameters", "return"],
      respuestaCorrecta: "parameters",
      correction:
        "Los parámetros de una función son valores que la función espera recibir cuando es llamada. Estos valores se utilizan dentro del cuerpo de la función para realizar operaciones o cálculos. Los parámetros permiten que una función sea flexible y pueda manejar diferentes valores cada vez que es invocada",
    },
    {
      pregunta:
        "Prestame atencion cuando tengo una variable en una funcion no puedo acceder a ella de forma convencional a esto aqui le llamamos scope , ¿ que seria ?",
      opciones: [
        "El tipo de dato de la variable.",
        "El lugar en el que la variable se declara y se puede acceder.",
        "El valor actual de la variable.",
        "La longitud de la variable.",
      ],
      respuestaCorrecta:
        "El lugar en el que la variable se declara y se puede acceder.",
      correction:
        "El 'scope' (ámbito) de una variable en programación se refiere a la región del código donde esa variable es válida y puede ser referenciada. En otras palabras, el scope determina dónde una variable puede ser utilizada y dónde no.",
    },
    {
      pregunta:
        "Vamos a poner las cosas un poco mas dificiles ya que hay demonios muy debiles por aqui ¿Qué hace la declaracion return en una funcion JavaScript?",
      opciones: [
        "Detiene la ejecución de la función.",
        "Devuelve un valor desde la función.",
        "Define una variable local.",
        "Borra una variable.",
      ],
      respuestaCorrecta: "Devuelve un valor desde la función.",
      correction:
        "En JavaScript, la palabra clave return se utiliza dentro de una función para devolver un valor. Cuando una función alcanza una declaración return, la ejecución de la función se detiene, y el valor especificado después de return se devuelve a la ubicación desde donde se llamó la función.",
    },
    {
      pregunta:
        "En isla javascript no solo tenemos funciones normales tambien las tenemos anonimas  ¿Qué es una función anónima ?",
      opciones: [
        "Una función que no puede ser utilizada.",
        "Una función sin parámetros.",
        "Una función que siempre devuelve null.",
        "Una función que no tiene nombre.",
      ],
      respuestaCorrecta: "Una función que no tiene nombre.",
      correction:
        "Una función anónima en JavaScript es una función que no tiene un nombre asociado. En lugar de ser declarada con un nombre como en una función tradicional, una función anónima puede ser definida directamente en el lugar donde se necesita o asignada a una variable.",
    },
    {
      pregunta:
        "No quiero que molestes a mi jefe  asi que dime ¿Qué es una función de flecha en JavaScript?",
      opciones: [
        "Una función que utiliza solo flechas en su código.",
        "Una función que siempre devuelve undefined.",
        "Una forma simplificada de escribir funciones anónimas.",
        "Una función que no puede recibir argumentos.",
      ],
      respuestaCorrecta:
        "Una forma simplificada de escribir funciones anónimas.",
      correction:
        "Una función de flecha en JavaScript es una forma más concisa de escribir funciones, introducida en ECMAScript 6 (ES6). Este tipo de función es conocido por su sintaxis más breve y su comportamiento particular con respecto al contexto de this. La sintaxis básica de una función de flecha es la siguiente:",
    },
    {
      pregunta:
        "Has superado a mis ayudantes veamos si estas a la altura de llegar mi jefe ¿Cuál de las siguientes opciones es una función de orden superior en JavaScript?",
      opciones: ["setTimeout()", "alert()", "parseInt()", "isNaN()"],
      respuestaCorrecta: "setTimeout()",
      correction:
        "Una función de orden superior en JavaScript es una función que toma una o más funciones como argumentos y/o devuelve una nueva función como resultado. En otras palabras, las funciones de orden superior tratan las funciones como ciudadanos de primera clase, permitiendo que se pasen como argumentos y se devuelvan como valores.",
    },
    {
      pregunta:
        "Veo que sigues avanzando , eso me molesta ¿Cuál es la diferencia entre null y undefined en la isla JavaScript?",
      opciones: [
        "null significa 'sin valor', y undefined es un valor especial.",
        "null es un valor primitivo, mientras que undefined significa que una variable no está definida.",
        "null solo se usa en funciones, mientras que undefined se usa en variables.",
        "No hay diferencia, son iguales.",
      ],
      respuestaCorrecta:
        "null es un valor primitivo, mientras que undefined significa que una variable no está definida.",
      correction:
        "null se usa para indicar la ausencia intencional de valor, mientras que undefined se utiliza para indicar la falta de asignación o la ausencia predeterminada de valor.",
    },
    {
      pregunta:
        "Ultimo asertijo para llegar a mi jefe ¿Cómo se llama el proceso de llamar a una función dentro de otra función en JavaScript?",
      opciones: ["Anidación", "Encapsulación", "Concatenación", "Redefinición"],
      respuestaCorrecta:
        "Ejecutar un bloque de código si la condición es falsa.",
      correction:
        "La anidación en JavaScript se refiere a la práctica de incluir una estructura dentro de otra. Puede implicar la anidación de funciones dentro de funciones, objetos dentro de objetos, arrays dentro de arrays, o combinaciones de estas estructuras.",
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
    setVisibleFour(true);
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

export default Seccion3;
