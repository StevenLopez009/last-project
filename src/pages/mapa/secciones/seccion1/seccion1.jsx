import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion1.jpg";
import jefe from "../../../../assets/img/mapa/demon1.gif";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import codigo from "../../../../assets/img/mapa/codigo1.jpg";

const Seccion1 = () => {
  const { setVisibleTwo } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a la isla. Estás en las playas de la introducción, es necesario saber  ¿qué es ECMA Script ? para poder avanzar.",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010794/lastproject/seccion1/ynxlesb4cztnas240ewk.png",
      opciones: [
        "Un lenguaje para desarrollo backend",
        "Un lenguaje para desarrollo movil",
        "Un lenguaje para desarrollo web",
        "Un lenguaje para desarrollo en servidores",
      ],
      respuestaCorrecta: "Un lenguaje para desarrollo web",
      correction:
        "Cometiste un error recuerda que JavaScript es un lenguaje de desarrollo web, JS se ejecuta en el navegador del usuario, permitiendo la interactividad en páginas web al manipular el contenido HTML y CSS. Además de su papel central en el desarrollo frontend",
      imagenCorreccion: "",
    },
    {
      pregunta:
        "Esa pregunta estaba muy facil ahora responde deseo declarar una constante ¿ como lo hago ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010794/lastproject/seccion1/ynxlesb4cztnas240ewk.png",
      opciones: [
        "constant nombre = valor;",
        "variable nombre = valor;",
        "let nombreDeVariable = valor;",
        "const nombre = valor;",
      ],
      respuestaCorrecta: "const nombre = valor;",
      correction:
        "En JavaScript, puedes declarar una constante utilizando la palabra clave const. La declaración de una constante se parece a la declaración de una variable, pero una vez que asignas un valor a una constante, no puedes reasignarle otro valor. Aquí tienes un ejemplo básico:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705349663/lastproject/seccion1/x6ygebkcq36lzrxvtmzc.jpg",
    },
    {
      pregunta:
        "No dejare que sigas avanzando, asi que te lo pondre un poco mas dificil , ¿Cual es la diferencia entre let y const ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010794/lastproject/seccion1/ynxlesb4cztnas240ewk.png",
      opciones: [
        "const es obsoleto y no se recomienda su uso. mientreas que let esta actualizado",
        "No hay diferencia, ambos se utilizan indistintamente.",
        "let se utiliza para variables mutables, mientras que const se utiliza para constantes inmutables.",
        "let solo puede declararse una vez, mientras que const puede reasignarse.",
      ],
      respuestaCorrecta:
        "let se utiliza para variables mutables, mientras que const se utiliza para constantes inmutables.",
      correction:
        "En JavaScript, let y const son dos formas de declarar variables Con let, puedes reasignar valores a la variable después de su declaración inicial. Con const, una vez que asignas un valor a la variable, no puedes reasignarle otro valor. La variable será constante durante toda su vida útil.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705349788/lastproject/seccion1/amo1vuylgfe2x1ho6jxf.jpg",
    },
    {
      pregunta:
        "veo que has vencido a Medus , soy Tenacula si te crees muy bueno que retorna esta linea de codigo:  //console.log('Hola')",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010795/lastproject/seccion1/dn59rkehtjjrt3svbixe.png",
      opciones: [
        "No muestra ningun mensaje",
        "Regresa un mensaje en consola Hola",
        "Muestra un mensaje en el navegador Hola",
        "Muestra una alerta con mensaje Hola",
      ],
      respuestaCorrecta: "No muestra ningun mensaje",
      correction:
        "Presta mucha atencion viajero a los detalles cuando una linea de codigo tiene dos lineas paralelas al inicio esta comentada , esto se hace para dejar explicaciones del codigo a posibles futuros viajeros que miren tu codigo ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705349783/lastproject/seccion1/vo7gnczlgjvm2gzhy1tx.jpg",
    },
    {
      pregunta:
        "Aqui te tengo un asertijo :  La isla de Javascript esta conectada con la isla de Html que etiqueta une estas dos islas ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010795/lastproject/seccion1/dn59rkehtjjrt3svbixe.png",
      opciones: [
        "<JavaScript></JavaScript>",
        "<script><script/>",
        "<html></html>",
        "<enlace></enlace>",
      ],
      respuestaCorrecta: "<script><script/>",
      correction:
        "hola viajero veo que te equivocaste aqui , mira es facil cuando vamos a enlazar un archivo JavaScript a tu html lo haremos con la etiqueta <script><script>, sigue jugando ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707262617/lastproject/seccion1/ucvds3gntlfqk9icnesb.jpg",
    },
    {
      pregunta:
        "En la isla existen varios datos primitivos de los que te muestro solo uno lo es ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010795/lastproject/seccion1/dn59rkehtjjrt3svbixe.png",
      opciones: ["String", "Arreglo", "Función", "Objeto"],
      respuestaCorrecta: "String",
      correction:
        'En JavaScript, los strings son tipos de datos que representan texto. Pueden contener letras, números, símbolos y espacios, y se definen encerrando el texto entre comillas simples (\') o dobles (""). Los strings son inmutables, lo que significa que no se pueden cambiar una vez creados.',
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707262197/lastproject/seccion1/yk80uah9yx6k01zwrurm.jpg",
    },
    {
      pregunta:
        "soy Neptun espero que tengas suficientes vidas para terminar , si utilizo este operador == que estoy haciendo ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010795/lastproject/seccion1/w7rhyvrteqxlwg2eg6dw.png",
      opciones: ["comparando", "igualando", "declarando", "creando"],
      respuestaCorrecta: "comparando",
      correction:
        "El operador == compara los valores de dos expresiones, y devuelve true si son iguales y false si son diferentes. no compara el tipo de valor si no el dato ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705350423/lastproject/seccion1/kghkhfpz81j21l8c3icp.jpg",
    },
    {
      pregunta:
        "Estas a dos preguntas de terminar la primera seccion asi que dime ¿Cuál es el propósito principal de JavaScript en un navegador web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010795/lastproject/seccion1/w7rhyvrteqxlwg2eg6dw.png",
      opciones: [
        "Cambiar el estilo de las páginas web",
        "Realizar operaciones matemáticas complejas",
        "Hacer que las páginas web sean interactivas",
        " Mejorar la estructura del documento HTML",
      ],
      respuestaCorrecta: "Hacer que las páginas web sean interactivas",
      correction:
        "Recuerda que JavaScript se utiliza principalmente para agregar interactividad a las páginas web, permitiendo que respondan a las acciones del usuario. ",
      imagenCorreccion: "",
    },
    {
      pregunta:
        "Al jefe no le gusta ser molestado dime ¿Cuál es la forma correcta de imprimir un mensaje en la consola de JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701010795/lastproject/seccion1/w7rhyvrteqxlwg2eg6dw.png",
      opciones: [
        "console.print('Hola, mundo');",
        "console.log('Hola, mundo')",
        "print('Hola, mundo')",
        "alert('Hola, mundo')",
      ],
      respuestaCorrecta: "console.log('Hola, mundo')",
      correction:
        "La consola es un aliado que nos ayuda a mirar las salidas de nuestro codigo y lo ejecutamos asi console.log ('Hola, mundo'), ves que hacemos tambien uso de las cadenas de texto",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705350550/lastproject/seccion1/wpqoxqmk5yifsua2ypvf.jpg",
    },
  ];

  const textoMonstruo =
    "Soy Nihilus , primer protector de la isla, veo que has vencido a mis ayudantes, pero si no solucionas mi código, tomaré todas tus Vidas, tu reina Elfa cruzo este valle con sus subditos estaba en busqueda de algo muy valioso";
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
        styleClass={"one"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"one"}
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
        styleClass={"one"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleTwo(true);
  };

  const titulo = "Introducción";

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
            styleClass={"one"}
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

export default Seccion1;
