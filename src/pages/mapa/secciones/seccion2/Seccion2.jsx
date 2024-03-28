import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion2.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion2 = () => {
  const { setVisibleThree } = useSections();

  const preguntas = [
    {
      pregunta:
        "Estoy preso mientras un bucle no cumpla una condicion , ¿cual es esa estructura de control ?",
      opciones: ["IF", "WHILE", "CONST", "LET"],
      respuestaCorrecta: "WHILE",
      correction:
        "La estructura while en JavaScript se utiliza para ejecutar repetidamente un bloque de código mientras una condición específica sea verdadera. La sintaxis básica es la siguiente:",
    },
    {
      pregunta:
        "Aqui en este cementerio se manejan multiples casos en funcion del valor de una expresion ¿ con cual estructura lo hacemos ?",
      opciones: ["LET", "CONST", "BUCLE", "SWITCH"],
      respuestaCorrecta: "SWITCH",
      correction:
        "La estructura switch en JavaScript se utiliza para realizar múltiples comparaciones sobre el valor de una expresión y ejecutar diferentes bloques de código según el caso coincidente. La sintaxis básica es la siguiente",
    },
    {
      pregunta:
        "Vas bien guerrero pero ten cuidado muchos se quedan atrapados en este cementerio for es una estructura de control aqui en el cementerio para que la utilizamos",
      opciones: [
        "Comparar valores teniendo en cuenta el tipo de datos.",
        "Manejar múltiples casos en función del valor de una expresión.",
        "Crear bucles que ejecutan un bloque de código un número específico de veces",
        "para crear bucles que se ejecutan un numero infinito de veces",
      ],
      respuestaCorrecta:
        "Crear bucles que ejecutan un bloque de código un número específico de veces",
      correction:
        "La estructura for en JavaScript se utiliza para crear bucles que ejecutan un bloque de código repetidamente, generalmente con una condición de finalización. La sintaxis básica es la siguiente:",
    },
    {
      pregunta:
        "Aqui en el cementerio 'Muerto'=='Muerto' y 'Muerto'==='Muerto'  cual es la diferencia",
      opciones: [
        "== y === son equivalentes y se pueden usar indistintamente.",
        "== compara valores sin tener en cuenta el tipo de datos, mientras que === lo tiene en cuenta",
        "===  igualan los valores mientras que == compara el tipo de dato ",
        "== compara valores teniendo en cuenta el tipo de datos, mientras que === no",
      ],
      respuestaCorrecta:
        "== compara valores sin tener en cuenta el tipo de datos, mientras que === lo tiene en cuenta",
      correction:
        "Con == comparas valor pero no el tipo de dato es diferente de === que compara el tipo de dato",
    },
    {
      pregunta:
        "Aqui en el cementerio de las estructuras de control creamos bucles para mantener a los demonios atrapados ¿Que es un Bucle?",
      opciones: [
        "una estructura de salida do codigo computado",
        "una estructura de control que permite repetir la ejecución de un bloque de código varias veces",
        "una estructura de control que regula el codigo boleano",
        "los bucles son un tipo de estructura de control y dato primitivo",
      ],
      respuestaCorrecta:
        "una estructura de control que permite repetir la ejecución de un bloque de código varias veces",
      correction:
        "Un bucle en JavaScript es una estructura de control que permite repetir la ejecución de un bloque de código varias veces. Los bucles son fundamentales para automatizar tareas que requieren repetición, como recorrer elementos de una lista, realizar cálculos iterativos o ejecutar una serie de instrucciones mientras se cumple una condición",
    },
    {
      pregunta:
        "¿Aqui trabajamos con If y con Switch si quieres seguir dime cual es la diferencia?",
      opciones: [
        "if se usa para tomar decisiones, mientras que switch se usa para bucles.",
        "if se utiliza para bucles, mientras que switch se usa para tomar decisiones.",
        "if permite condiciones múltiples, mientras que switch se utiliza para decisiones binarias.",
        "switch permite condiciones múltiples, mientras que if se utiliza para decisiones binarias.",
      ],
      respuestaCorrecta:
        "switch permite condiciones múltiples, mientras que if se utiliza para decisiones binarias.",
      correction:
        "if es más versátil y adecuado para condiciones complejas, mientras que switch es más adecuado para realizar múltiples comparaciones sobre un único valor y puede hacer que el código sea más legible en ciertos escenarios.",
    },
    {
      pregunta:
        "¿Ayudame en mi trabajo tengo varias condiciones y necesito ponerlas una despues de la otra , con cual estructura lo puedo hacer?",
      opciones: ["else if", "for", "let", "const"],
      respuestaCorrecta: "else if",
      correction:
        "if es una estructura de control de flujo condicional que permite ejecutar un bloque de código si una condición especificada es verdadera. También puede tener una cláusula else opcional que se ejecutará si la condición es falsa.",
    },
    {
      pregunta: "Necesito romper un bucle antes de que se cumpla la condicion",
      opciones: ["exit", "break", "return", "continue"],
      respuestaCorrecta: "break",
      correction:
        "La palabra clave break en JavaScript se utiliza para salir de un bucle prematuramente, deteniendo su ejecución incluso si la condición de finalización del bucle no se ha cumplido.",
    },
    {
      pregunta:
        "¿ya hice mi condicion con if , que sentido tiene poner else despues ? Estas cerca de despertar a nuestra jefe, si no respondes bien quedaras condenado a este cementerio",
      opciones: [
        "Ejecutar un bloque de código si la condición es falsa.",
        "Ejecutar un bloque de código si la condición es verdadera.",
        "Iniciar un nuevo bucle.",
        "Salir del programa.",
      ],
      respuestaCorrecta:
        "Ejecutar un bloque de código si la condición es falsa.",
      correction:
        "if es una estructura de control de flujo condicional que permite ejecutar un bloque de código si una condición especificada es verdadera. También puede tener una cláusula else opcional que se ejecutará si la condición es falsa.",
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
    setVisibleThree(true);
  };

  const titulo = "Cementerio de las  Estructuras de control";

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

export default Seccion2;
