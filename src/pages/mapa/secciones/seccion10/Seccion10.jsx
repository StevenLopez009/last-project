import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion10.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon10.gif";
import codigo from "../../../../assets/img/mapa/codigo10.jpeg";

const Seccion10 = () => {
  const { setVisibleEleven } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido al pantano de los errores , existe un objeto para lanzar errores, ¿cuál es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810895/lastproject/seccion10/sitj2s5cesmtk1fw6xwz.png",
      opciones: ["ErrorsJs", "Throw", "Catch", "Try"],
      respuestaCorrecta: "Throw",
      correction:
        "En JavaScript, puedes lanzar errores (también conocidos como excepciones) utilizando la palabra clave throw",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705424075/lastproject/seccion10/qvd06chvet3lt4l6wk9e.jpg",
    },
    {
      pregunta:
        "Cuando cometemos un error de sintaxis en nuestro código, tiene que ver con...",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810895/lastproject/seccion10/sitj2s5cesmtk1fw6xwz.png",
      opciones: [
        "Error de Referencia",
        "Error de Escritura",
        "Error de Tiempo de ejecucion ",
        "Error de Logica",
      ],
      respuestaCorrecta: "Error de Escritura",
      correction:
        "Los errores de sintaxis en JavaScript ocurren cuando el intérprete encuentra un código que viola las reglas gramaticales del lenguaje. Estos errores impiden que el código se ejecute correctamente",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705424228/lastproject/seccion10/gakg8ib1xxcmq1jrnumw.jpg",
    },
    {
      pregunta:
        "Ya has utilizado anteriormente esta declaracion para capturar y manejar error ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810895/lastproject/seccion10/sitj2s5cesmtk1fw6xwz.png",
      opciones: ["Throw", "Object", "Try Catch", "Fetch"],
      respuestaCorrecta: "Try Catch",
      correction:
        "try...catch es una estructura de control en JavaScript que se utiliza para manejar errores de manera controlada. Permite definir un bloque de código en el que pueden ocurrir errores y capturar esos errores para manejarlos, evitando que afecten la ejecución normal del programa.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707426635/lastproject/seccion10/yyuibgfeewvvawtldmxj.jpg",
    },
    {
      pregunta:
        "En las tierras de los errores encerramos un código en un try ¿ con qué sentido?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810895/lastproject/seccion10/sitj2s5cesmtk1fw6xwz.png",
      opciones: [
        "Encerrar código que podría arrojar una excepción",
        "Capturar errores en funciones",
        "Definir una función para mostrar el error",
        "Lanzar un error en la consola",
      ],
      respuestaCorrecta: "Encerrar código que podría arrojar una excepción",
      correction:
        "Permite definir un bloque de código en el que pueden ocurrir errores y capturar esos errores para manejarlos, evitando que afecten la ejecución normal del programa.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705424347/lastproject/seccion10/vheweibqucuozby4hdne.jpg",
    },
    {
      pregunta:
        "¿Qué es una excepción en las tierras de los errores de JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810899/lastproject/seccion10/y3mi2dahatyysnq2ibjx.png",
      opciones: [
        "Un objeto que representa un error",
        "Un tipo de bucle",
        "Un valor especial que representa un resultado exitoso",
        "Un comentario en el código",
      ],
      respuestaCorrecta: "Un objeto que representa un error",
      correction:
        "Una excepción en JavaScript es un objeto que se crea automáticamente o se lanza manualmente en tiempo de ejecución para indicar que ha ocurrido un error o una situación excepcional.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707426635/lastproject/seccion10/yyuibgfeewvvawtldmxj.jpg",
    },
    {
      pregunta:
        "Vamos bien, guerrero, no olvides contar tus vidas. ¿Cuál es el propósito principal de la declaración catch?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810899/lastproject/seccion10/y3mi2dahatyysnq2ibjx.png",
      opciones: [
        "Lanzar un error",
        "Definir una función",
        "Capturar y manejar excepciones",
        "Encerrar código que podría arrojar una excepción",
      ],
      respuestaCorrecta: "Encerrar código que podría arrojar una excepción",
      correction:
        "El propósito de la declaración catch es proporcionar un bloque de código que se ejecutará cuando se produzca una excepción dentro del bloque try",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707426635/lastproject/seccion10/yyuibgfeewvvawtldmxj.jpg",
    },
    {
      pregunta:
        "Ya has crusado la tierra de los objetos aqui tenemos un objeto error para qué lo tenemos",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810899/lastproject/seccion10/y3mi2dahatyysnq2ibjx.png",
      opciones: [
        "Una variable global",
        "Una palabra clave reservada",
        "Un método para lanzar excepciones",
        "Un objeto que representa errores",
      ],
      respuestaCorrecta: "Un objeto que representa errores",
      correction:
        "El objeto Error en JavaScript es un objeto integrado que se utiliza para representar errores durante la ejecución del programa. Este objeto y sus subclases proporcionan información sobre el tipo y la causa de un error, y son comúnmente utilizados en conjunto con la declaración",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705425425/lastproject/seccion10/gy7rmkb5uycy3xetswyn.jpg",
    },
    {
      pregunta:
        "Recuerdas utilizar la consola para imprimir mensajes , también podemos utilizarla para imprimir errores con cual de estas opciones.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810903/lastproject/seccion10/zgkpe6yiwwjlg4vsrbhj.png",
      opciones: [
        "Console.messageError()",
        "Console.log()",
        "Console.error()",
        "Console.exception()",
      ],
      respuestaCorrecta: "Console.error()",
      correction:
        "console.error es un método proporcionado por la consola en JavaScript que se utiliza para imprimir mensajes de error en la consola del navegador. A diferencia de console.log, que se utiliza para mensajes de registro generales, console.error está específicamente diseñado para resaltar mensajes de error",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705425569/lastproject/seccion10/iqkbjx90wsswcw7f7ahb.jpg",
    },
    {
      pregunta:
        "Ya sabes que es una excepción, recuerda cómo lanzarla al final de la ejecución de una función.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810903/lastproject/seccion10/zgkpe6yiwwjlg4vsrbhj.png",
      opciones: ["Return", "Throw", "Break", "Continue"],
      respuestaCorrecta: "Throw",
      correction:
        "Para lanzar una excepción al final de una función en JavaScript, puedes utilizar la palabra clave throw seguida de un objeto Error o una instancia de alguna subclase de Error. Aquí tienes un ejemplo sencillo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705425691/lastproject/seccion10/iqranunk2dwjkxugzp0u.jpg",
    },
  ];

  const textoMonstruo = "texto2";
  const prueba = "Que necesito para comentar el console.log()";
  const respuesta = "//";

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
        styleClass={"ten"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"ten"}
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
        styleClass={"ten"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleEleven(true);
  };

  const titulo = "Pantano de los errores";

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

export default Seccion10;
