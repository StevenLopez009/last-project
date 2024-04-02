import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion9.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon9.gif";
import codigo from "../../../../assets/img/mapa/codigo9.jpeg";

const Seccion9 = () => {
  const { setVisibleTen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Has llegado a las tierras de la serpiente y el asincronismo , espero que sepas a que te enfrentas con la programación asincronica.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810774/lastproject/seccion9/gjnddaf8tos12fsiubsj.png",
      opciones: [
        "Un tipo de programación que solo se utiliza en servidores",
        "Un estilo de programación que permite que múltiples tareas se ejecuten en paralelo",
        "Un enfoque para escribir código de forma secuencial",
        "Un tipo de programación que no se usa en JavaScript",
      ],
      respuestaCorrecta:
        "Un estilo de programación que permite que múltiples tareas se ejecuten en paralelo",
      correction:
        "El asincronismo se refiere a la ejecución de operaciones de forma no bloqueante, permitiendo que otras operaciones continúen mientras se espera a que ciertas tareas se completen.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705421489/lastproject/seccion9/ehawuny3q1ml4df6ydzp.jpg",
    },
    {
      pregunta:
        "Recuerdas las funciones aquí también las utilizamos como callbacks. Dime con qué fin.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810774/lastproject/seccion9/gjnddaf8tos12fsiubsj.png",
      opciones: [
        "Controlar errores",
        "Realizar operaciones matemáticas",
        "Configurar variables globales",
        "Gestionar el flujo de ejecución después de una operación asincrónica",
      ],
      respuestaCorrecta:
        "Gestionar el flujo de ejecución después de una operación asincrónica",
      correction:
        "Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una operación asíncrona haya concluido. Aunque son un enfoque común, el código puede volverse difícil de leer y mantener debido a la anidación de callbacks, un fenómeno conocido como 'callback hell' o 'infierno de callbacks'",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705421607/lastproject/seccion9/ki8axjc5pn2h3rlvbpth.jpg",
    },
    {
      pregunta:
        "Vienés desde el portal fetch espero que recuerdes la función que se utiliza para hacer peticiones http, ya que aquí las hacemos asincronas.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810774/lastproject/seccion9/gjnddaf8tos12fsiubsj.png",
      opciones: ["WaitRequest", "GetHTTP", "RequestHTTP", "Fetch"],
      respuestaCorrecta: "Fetch",
      correction:
        "Fetch es una función en JavaScript que se utiliza para realizar solicitudes de red de forma asíncrona. Proporciona una interfaz moderna para realizar peticiones HTTP y manejar las respuestas. La función fetch devuelve una Promesa que se resuelve con el objeto Response que representa la respuesta a la solicitud.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707419999/lastproject/seccion7/qoxg9jeac3i0tb1x9hk7.jpg",
    },
    {
      pregunta:
        "Al igual que las promesas en la normalidad aqui las utilizamos con un fin",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810777/lastproject/seccion9/gyexj3an96yxql0bvlml.png",
      opciones: [
        "Un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca",
        "Una función que realiza operaciones matemáticas",
        "Una variable global que vendra de un objeto asyncrono",
        "un arreglo asincrono que vendra de una funcion tambien asincrona",
      ],
      respuestaCorrecta:
        "Un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca",
      correction:
        "Una promesa en JavaScript es un objeto que representa el resultado eventual (éxito o fallo) de una operación asíncrona. Las promesas proporcionan una forma más estructurada y elegante de trabajar con código asíncrono en comparación con los callbacks.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707425663/lastproject/seccion9/r99s74cbny9stm7lpmcx.jpg",
    },
    {
      pregunta:
        "Async y Await son las bases de la programacion asincrona con ellas podemos...",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810777/lastproject/seccion9/gyexj3an96yxql0bvlml.png",
      opciones: [
        "Realizar cálculos matemáticos",
        "Gestionar funciones de devolución de llamada (callbacks)",
        "Simplificar la escritura de código asincrónico y hacerlo más legible",
        "Hacer solicitudes www síncronas",
      ],
      respuestaCorrecta:
        "Simplificar la escritura de códwigo asincrónico y hacerlo más legible",
      correction:
        "Async y Await son características introducidas en ECMAScript 2017 (también conocido como ES8) que simplifican y mejoran la legibilidad del código asíncrono en JavaScript.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705422040/lastproject/seccion9/qxfqqfohmouq6ylhs0qy.jpg",
    },
    {
      pregunta:
        "¿Ya sabes qué son las promesas , cómo podemos capturar los errores de ellas?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810777/lastproject/seccion9/gyexj3an96yxql0bvlml.png",
      opciones: ["ErrorHandling()", "Catch()", "HandleError()", "Try-Error"],
      respuestaCorrecta: "Catch()",
      correction:
        "Puedes capturar los errores de las promesas utilizando el método .catch() o combinando try y catch en conjunción con async/await. Aquí tienes ejemplos de ambas formas:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705423371/lastproject/seccion9/xr6z3e5lpepg0phbihhe.jpg",
    },
    {
      pregunta: "Es mejor utilizar promesas en callbacks ¿Sabes porque? ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810777/lastproject/seccion9/gyexj3an96yxql0bvlml.png",
      opciones: [
        "Mayor control sobre la ejecución",
        "Mayor anidamiento",
        "Mayor complejidad de código",
        "Mayor legibilidad y evita el 'Callback Hell'",
      ],
      respuestaCorrecta: "Mayor legibilidad y evita el 'Callback Hell'",
      correction:
        "El uso de promesas en lugar de callbacks tiene varias ventajas que hacen que el código sea más legible, mantenible y fácil de manejar. Aquí hay algunas razones por las cuales las promesas son preferibles en comparación con los callbacks: evitando el callbackhell",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705423520/lastproject/seccion9/vvcdcihxdutiqqhcdjpg.jpg",
    },
    {
      pregunta:
        "Vamos bien guerrero una pregunta mas y te enfrentaras a la jefe del asincornismo ¿Qué se entiende por 'Callback Hell' ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810777/lastproject/seccion9/gyexj3an96yxql0bvlml.png",
      opciones: [
        "La anidación excesiva de funciones de devolución de llamada que dificulta la legibilidad",
        "Un término cariñoso para las funciones de devolución de llamada",
        "Un patrón de diseño para Promesas",
        "Una técnica para manejar errores",
      ],
      respuestaCorrecta:
        "La anidación excesiva de funciones de devolución de llamada que dificulta la legibilidad",
      correction:
        "También conocido como 'infierno de callbacks', este problema se produce cuando tienes múltiples operaciones asíncronas anidadas, lo que puede llevar a un código difícil de entender y mantener. ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705423603/lastproject/seccion9/m5aro6sym71hqmagnnsv.jpg",
    },
    {
      pregunta:
        " Con una de estas funciones, ejecutamos un código después de un tiempo.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810780/lastproject/seccion9/b0njp93x4apxsmfaalnp.png",
      opciones: [
        "SetTimeout()",
        "SetInterval()",
        "SetDelay()",
        "DelayedFunction()",
      ],
      respuestaCorrecta: "SetTimeout()",
      correction:
        "SetTimeout es una función en JavaScript que se utiliza para programar la ejecución de una función después de un cierto período de tiempo. Es comúnmente utilizado para introducir retrasos en la ejecución de cierto código o para ejecutar tareas de manera asíncrona después de un intervalo específico",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705423688/lastproject/seccion9/etpbt2ggbpjwiyjx0e9n.jpg",
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
        styleClass={"nine"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"nine"}
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
        styleClass={"nine"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleTen(true);
  };

  const titulo = "Asincronismo";

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

export default Seccion9;
