import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion7.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion7 = () => {
  const { setVisibleEight } = useSections();

  const preguntas = [
    {
      pregunta:
        "Estos son los portales de las peticiones , traemos datos desde cualquier lugar si quieres entrar necesitas saber ¿Qué significa AJAX?",
      opciones: [
        "Advanced JavaScript and XML",
        "Asynchronous JavaScript and XML",
        "Antrax Javascript And Xml",
        "Actualy JavaScript And Xml",
      ],
      respuestaCorrecta: "Asynchronous JavaScript and XML",
      correction:
        "AJAX, que significa 'Asynchronous JavaScript and XML' (JavaScript Asíncrono y XML), es una técnica de desarrollo web que permite actualizar partes específicas de una página web sin necesidad de recargar toda la página",
    },
    {
      pregunta:
        "Vamos a abrir el portal y hacer una solicitud fetch dame la función para hacerla",
      opciones: ["CreateRequest", "TecRequest", "Fetch", "Function"],
      respuestaCorrecta: "Fetch",
      correction:
        "fetch es una función en JavaScript que se utiliza para realizar solicitudes de red, típicamente para obtener recursos de una API o servidor. Esta función proporciona una interfaz más moderna y flexible para trabajar con peticiones HTTP en comparación con métodos más antiguos como XMLHttpRequest.",
    },
    {
      pregunta:
        "Las peticiones Fetch tienen características para hacer peticiones muy buenas encuentra la que no corresponde",
      opciones: [
        "Manejo más sencillo de errores",
        "Mayor compatibilidad con navegadores nuevos",
        "Encadenamiento de llamadas",
        "Ninguna de las anteriores",
      ],
      respuestaCorrecta: "Ninguna de las anteriores",
      correction:
        "fetch es una función en JavaScript que simplifica las solicitudes de red, ofreciendo una sintaxis simple y basada en promesas. Su uso nativo en los navegadores modernos, el soporte para JSON, la configuración de opciones avanzadas, el manejo de CORS.",
    },
    {
      pregunta:
        "Usar XMLHttpRequest en cambio de Fetch solo trae una ventaja Dime cual es",
      opciones: [
        "Mayor control y flexibilidad en la configuración de solicitudes.",
        "Integración más sencilla con Promesas.",
        "Sintaxis más simple.",
        "Compatibilidad con versiones antiguas del navegador",
      ],
      respuestaCorrecta: "Compatibilidad con versiones antiguas del navegador",
      correction:
        "La principal ventaja de Fetch, además de su interfaz basada en Promesas, es que es más flexible y poderoso en términos de manipulación de solicitudes y respuestas. Sin embargo, Fetch no es compatible con navegadores más antiguos, por lo que si necesitas soporte para navegadores más antiguos, es posible que debas seguir utilizando XMLHttpRequest ",
    },
    {
      pregunta:
        "Cuando hacemos una petición fetch desde el portal debemos capturar la respuesta exitosa como lo hacemos",
      opciones: [
        "then(success=>{})",
        "handleSuccess=>{download}",
        "then(response => response.json())",
        "function Succefully ()",
      ],
      respuestaCorrecta: "then(response => response.json())",
      correction:
        "then(response => response.json()) se encarga de manejar la respuesta exitosa de la solicitud HTTP hecha con fetch. Toma la respuesta, la interpreta como JSON y devuelve una nueva Promesa que se resolverá con los datos parseados del JSON.",
    },
    {
      pregunta:
        "Vas bien guerrero espero que sepas que es CORS en el contexto de las peticiones",
      opciones: [
        "Otra forma de hacer peticiones",
        "Un tipo de solicitud GET en Fetch.",
        "Mecanismo de seguridad implementado por los navegadores web",
        "Ninguna de las anteriores",
      ],
      respuestaCorrecta:
        "Mecanismo de seguridad implementado por los navegadores web",
      correction:
        "CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web que controla cómo los recursos web de una página web pueden ser solicitados desde otro dominio diferente al de la propia página.",
    },
    {
      pregunta:
        "¿Qué evento se dispara cuando se completa una solicitud Fetch con éxito?",
      opciones: ["OnSuccess", "OnComplete", "DownLoad;", "Then"],
      respuestaCorrecta: "Then",
      correction:
        "fetch dispara una Promesa que se resuelve cuando la solicitud es exitosa. En el contexto de las Promesas, el método then se utiliza para manejar la resolución exitosa de la Promesa.",
    },
    {
      pregunta:
        "¿Con cuál de estos métodos obtengo los datos de una petición?  Ya casi llegas a nuestro jefe, creo que tienes lo necesario",
      opciones: ["POST", "GET", "UPDATE", "DELETE"],
      respuestaCorrecta: "GET",
      correction:
        "Cuando se realiza una solicitud HTTP con el método GET mediante la API Fetch en JavaScript, se está solicitando información de un recurso específico en un servidor. El método GET se utiliza para recuperar datos del servidor",
    },
    {
      pregunta:
        "Has llegado lejos, guerrero. Espero que conozcas cómo capturar errores.",
      opciones: ["OnError", "Catch", "ErrorHandler", "Fetch"],
      respuestaCorrecta: "Catch",
      correction:
        "El bloque catch en las solicitudes Fetch se utiliza para manejar cualquier error que pueda ocurrir durante el proceso de la solicitud. Cuando una solicitud Fetch encuentra un error, ya sea debido a un problema de red, un error en el servidor, o cualquier otro problema",
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
    setVisibleEight(true);
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

export default Seccion7;
