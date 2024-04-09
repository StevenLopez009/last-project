import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion16.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";

import { useQuiz } from "../../hook/useQuiz";
import ComponentReina from "../ComponentReina";

const Seccion16 = () => {
  const preguntas = [
    {
      pregunta:
        "¿Cuál de las siguientes estrategias es una buena práctica para optimizar el rendimiento de JavaScript en una aplicación web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811500/lastproject/seccion16/tsrrx97zz8ubxxutj8ah.png",
      opciones: [
        "Cargar todos los scripts al inicio de la página.",
        "Utilizar archivos JavaScript no minificados.",
        "No utilizar ninguna biblioteca de terceros.",
        "Minimizar y combinar archivos JavaScript",
      ],
      respuestaCorrecta: "Minimizar y combinar archivos JavaScript",
      correction:
        "Minimizar y combinar archivos JavaScript es una buena práctica común para optimizar el rendimiento de una aplicación web. Estas prácticas pueden mejorar la velocidad de carga de la página.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705443420/lastproject/seccion16/ifh7dvt6cjobo9j5mqzb.jpg",
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811500/lastproject/seccion16/tsrrx97zz8ubxxutj8ah.png",
      opciones: ["Asincronía", "Promesas", "Await", "Defer"],
      respuestaCorrecta: "Defer",
      correction:
        "La técnica comúnmente utilizada para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada es colocar el código JavaScript al final del cuerpo del documento HTML o usar el atributo defer en la etiqueta <script>.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705443584/lastproject/seccion16/vod4govo83qanutipbu4.jpg",
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para cargar recursos, como imágenes y scripts, solo cuando son necesarios en una página web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811502/lastproject/seccion16/wgjhftttzqjzhtfbk7sq.png",
      opciones: [
        "Precarga",
        "Lazy loading",
        "Carga síncrona",
        "Compresión de recursos",
      ],
      respuestaCorrecta: "Lazy loading",
      correction:
        "Lazy loading es una técnica utilizada en desarrollo web para mejorar el rendimiento de una página al retrasar la carga de ciertos recursos hasta que sean necesarios.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705443868/lastproject/seccion16/k3dd1wnaipwhj0k5vayt.jpg",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una estrategia para mejorar el rendimiento de una aplicación web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811502/lastproject/seccion16/wgjhftttzqjzhtfbk7sq.png",
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
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705443967/lastproject/seccion16/bltpc8qxnoruod0mbf8n.jpg",
    },
    {
      pregunta:
        "¿Cuál es una técnica efectiva para reducir la carga inicial de JavaScript en una página web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811502/lastproject/seccion16/wgjhftttzqjzhtfbk7sq.png",
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
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705443868/lastproject/seccion16/k3dd1wnaipwhj0k5vayt.jpg",
    },
    {
      pregunta:
        "¿Qué estrategia se utiliza para mejorar el rendimiento de una aplicación web al reducir el tiempo de carga de recursos?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811502/lastproject/seccion16/wgjhftttzqjzhtfbk7sq.png",
      opciones: [
        "Utilizar compresión de recursos y servidores CDN",
        "Utilizar el motor V8 de Google",
        "Aumentar el tamaño de los recursos multimedia",
        " Habilitar la caché del navegador",
      ],
      respuestaCorrecta: "Utilizar compresión de recursos y servidores CDN",
      correction:
        "Utilizar compresión de recursos y servidores de CDN (Content Delivery Network) son prácticas esenciales para mejorar el rendimiento y la velocidad de carga de una aplicación web.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705444300/lastproject/seccion16/zdqm6x0adbwdboergeub.jpg",
    },

    {
      pregunta:
        "¿Cuál de las siguientes opciones es una técnica efectiva para reducir el uso de memoria en una aplicación JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811503/lastproject/seccion16/trh7r9dnuows2yyhwel5.png",
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
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705444542/lastproject/seccion16/ssza0acbp0qlsszfzcfv.jpg",
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para reducir el parpadeo de contenido en una página web durante la carga?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811503/lastproject/seccion16/trh7r9dnuows2yyhwel5.png",
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
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705444750/lastproject/seccion16/ibi72s0ionwjgiy9i66s.jpg",
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
        styleClass={"sixteen"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"sixteen"}
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
        styleClass={"sixteen"}
      />
    );
  };

  const titulo = "Optimizacion";

  return (
    <>
      {start ? (
        showCorrection ? (
          renderCorrection()
        ) : showCongratulation ? (
          renderCongratulation()
        ) : showFinal ? (
          <ComponentReina />
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
