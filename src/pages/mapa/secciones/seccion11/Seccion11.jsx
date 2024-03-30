import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion11.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion11 = () => {
  const { setVisibleTwelve } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido al almacenamiento , aquí existe una forma de guardar poca información en el navegador con clave y valor.",
      opciones: ["Local Storage", "Session Storage", "Cookies", " IndexDB"],
      respuestaCorrecta: "Local Storage",
      correction:
        "LocalStorage es un objeto en JavaScript que proporciona una interfaz de almacenamiento persistente en el navegador web. Permite almacenar pares clave/valor en el navegador ",
    },
    {
      pregunta:
        "Si respondiste bien la anterior pregunta, conoces Local Storage aqui hay una afirmación verdadera, dime cuál",
      opciones: [
        "Los datos en Local Storage expiran al cerrar el navegador.",
        "Los datos en Local Storage están limitados a un tamaño muy pequeño.",
        "Los datos en Local Storage persisten incluso después de cerrar el navegador",
        "Local Storage no es compatible con navegadores modernos.",
      ],
      respuestaCorrecta:
        "Los datos en Local Storage persisten incluso después de cerrar el navegador",
      correction:
        "Persistencia: Los datos almacenados en localStorage permanecen cuando se cierra y vuelve a abrir la misma pestaña o ventana del navegador, pero no persisten si se cierra completamente el navegador y se vuelve a abrir",
    },
    {
      pregunta:
        "Te dije que el almacenamiento de LocalStorage es poco, dime cuantas MB tiene de almacenamiento.",
      opciones: ["100MB", "1MB", "5MB", "700MB"],
      respuestaCorrecta: "5MB",
      correction:
        "En la mayoría de los navegadores modernos, el límite típico de almacenamiento para localStorage es de al menos 5 MB por dominio.",
    },
    {
      pregunta:
        "SessionStorage es otra forma de guardar en el navegador, dime con cuál método lo hacemos. ",
      opciones: [
        "sessionStoreData()",
        "storeSession()",
        "saveToSession()",
        "setItem()",
      ],
      respuestaCorrecta: "setItem()",
      correction:
        "SessionStorage es otra forma de almacenar datos en el navegador, similar a localStorage. Ambos son objetos de almacenamiento web que proporcionan una interfaz de pares clave/valor,",
    },
    {
      pregunta:
        "Estoy orgulloso de ti, guerrero. Vas muy lejos de estas afirmaciones de session storage solo una es verdadera.",
      opciones: [
        "Los datos en Session Storage se eliminan al cerrar la pestaña del navegador o cuando termina la sesión",
        "Los datos en Session Storage persisten después de cerrar el navegador.",
        "Los datos en Session Storage están disponibles para todos los navegadores.",
        "Session Storage tiene un límite de almacenamiento de 1 GB.",
      ],
      respuestaCorrecta:
        "Los datos en Session Storage se eliminan al cerrar la pestaña del navegador o cuando termina la sesión",
      correction:
        "Persistencia: Los datos almacenados en localStorage permanecen cuando se cierra y vuelve a abrir la misma pestaña o ventana del navegador, pero no persisten si se cierra completamente el navegador y se vuelve a abrir.",
    },
    {
      pregunta:
        "Otra forma de almacenar en el navegador son las Cookies no son muy recomendables pero tienen una ventaja",
      opciones: [
        "Gran capacidad de almacenamiento.",
        "Datos persistentes incluso después de cerrar el navegador.",
        "Facilidad de acceso desde JavaScript",
        "Capacidad para almacenar datos en múltiples ventanas o pestañas.",
      ],
      respuestaCorrecta: "Facilidad de acceso desde JavaScript",
      correction:
        "JavaScript tiene facilidades para acceder y manipular cookies en el navegador a través del objeto document.cookie. Este objeto proporciona una interfaz simple para leer y escribir cookies.",
    },
    {
      pregunta:
        "Hay un api que nos da una mayor capacidad de almacenamiento en el navegador , pista no la hemos nombrado",
      opciones: ["IndexedDB", "Storage", "Cookies", "localstorage"],
      respuestaCorrecta: "IndexedDB",
      correction:
        "IndexedDB (Database de Índice) es una API en JavaScript que proporciona un sistema de almacenamiento de base de datos en el navegador web. Se utiliza para almacenar grandes cantidades de datos estructurados y permite a las aplicaciones web realizar operaciones de lectura y escritura en una base de datos local.",
    },
    {
      pregunta:
        "¿Qué método se utiliza para almacenar datos en IndexedDB en JavaScript?",
      opciones: ["storeData()", "put()", "addData()", "setItem()"],
      respuestaCorrecta: "put()",
      correction:
        "put(objeto) - Agregar o actualizar un objeto:Este método se utiliza para agregar un nuevo objeto o actualizar un objeto existente en un objeto almacenado en IndexedDB.",
    },
    {
      pregunta:
        "¿Qué característica distingue a IndexedDB de otros métodos de almacenamiento en el navegador?",
      opciones: [
        "Capacidad de almacenamiento en la nube.",
        "Almacenamiento de datos en objetos JavaScript estructurados",
        "Uso de consultas SQL para el acceso a datos.",
        "Limitaciones en la persistencia de datos.",
      ],
      respuestaCorrecta:
        "Almacenamiento de datos en objetos JavaScript estructurados",
      correction:
        "El almacenamiento de datos en objetos JavaScript estructurados se refiere a la práctica de utilizar objetos JavaScript con una estructura definida para almacenar información en el localStorage",
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
    setVisibleTwelve(true);
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

export default Seccion11;
