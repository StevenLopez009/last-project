import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion15.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon15.gif";
import codigo from "../../../../assets/img/mapa/codigo14.jpeg";

const Seccion15 = () => {
  const { setVisibleSixteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido al bosque de la seguridad, cuando haces un formulario y alguien inserta código malicioso, sabes ¿qué tipo de ataque es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811476/lastproject/seccion15/e4mex3ywjy16m8kpgphf.png",
      opciones: [
        "Ataque CSRF (Cross-Site Request Forgery)",
        "Ataque XSS (Cross-Site Scripting)",
        "Ataque SQL Injection",
        "Ataque DoS (Denial of Service)",
      ],
      respuestaCorrecta: "Ataque XSS (Cross-Site Scripting)",
      correction:
        "El Ataque XSS (Cross-Site Scripting) es una vulnerabilidad de seguridad en aplicaciones web que permite a un atacante inyectar scripts maliciosos en páginas web visitadas por otros usuarios.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705441827/lastproject/seccion15/ov3uicupwaiolk0rddph.jpg",
    },
    {
      pregunta:
        "Te enseñaré una de estas medidas, te previene los ataques de inyección SQL, dime, ¿cuál es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811476/lastproject/seccion15/e4mex3ywjy16m8kpgphf.png",
      opciones: [
        "Validar y escapar las consultas SQL (SQL queries).",
        "Utilizar contraseñas débiles en la base de datos.",
        "Confiar en la seguridad del navegador.",
        "Ninguna de las anteriores.",
      ],
      respuestaCorrecta: "Validar y escapar las consultas SQL (SQL queries).",
      correction:
        "La técnica comúnmente utilizada para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada es colocar el código JavaScript al final del cuerpo del documento HTML o usar el atributo defer en la etiqueta <script>.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705441941/lastproject/seccion15/hecty4ckmwwhpljzblbv.jpg",
    },
    {
      pregunta:
        "¿Qué ataque intenta engañar al usuario para que realice acciones no deseadas en una aplicación web en su nombre?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811476/lastproject/seccion15/e4mex3ywjy16m8kpgphf.png",
      opciones: [
        "Ataque XSS (Cross-Site Scripting)",
        "Ataque CSRF (Cross-Site Request Forgery)",
        "Ataque de fuerza bruta",
        "Ataque de reenvío de cabeceras (Header Injection)",
      ],
      respuestaCorrecta: "Ataque CSRF (Cross-Site Request Forgery)",
      correction:
        "El Ataque CSRF (Cross-Site Request Forgery) es una vulnerabilidad de seguridad que se produce cuando un atacante aprovecha la confianza que un sitio web tiene en el navegador del usuario para realizar acciones no deseadas en nombre del usuario sin su consentimiento",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705442062/lastproject/seccion15/t2lceqqzowqmtuqxczag.jpg",
    },
    {
      pregunta:
        "¿Qué medida de seguridad en JavaScript se utiliza para restringir las solicitudes de recursos cruzados en navegadores?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811476/lastproject/seccion15/e4mex3ywjy16m8kpgphf.png",
      opciones: [
        "Cookies seguras (Secure Cookies)",
        "Content Security Policy (Política de Seguridad de Contenido)",
        "Cors Policy (Política de Compartición de Recursos)",
        "Same-Origin Policy (Política del Mismo Origen)",
      ],
      respuestaCorrecta: "Same-Origin Policy (Política del Mismo Origen)",
      correction:
        "La Same-Origin Policy (Política del Mismo Origen) es una política de seguridad implementada en los navegadores web para restringir las solicitudes de recursos (como scripts, imágenes, o datos) a un dominio diferente al que originó la propia página.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705442362/lastproject/seccion15/rxtyqwslkgrwlf453x8a.jpg",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una técnica de protección contra ataques de Cross-Site Scripting (XSS) en JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811476/lastproject/seccion15/e4mex3ywjy16m8kpgphf.png",
      opciones: [
        "Uso de contraseñas fuertes",
        "Sanitización y validación de datos de entrada",
        "Habilitar JavaScript en todas las páginas",
        "Utilizar el mismo origen (Same-Origin) en las solicitudes de recursos",
      ],
      respuestaCorrecta: "Sanitización y validación de datos de entrada",
      correction:
        "La sanitización y validación de datos de entrada son prácticas esenciales para garantizar la seguridad y la integridad de una aplicación. Ambos procesos son importantes para prevenir vulnerabilidades y asegurarse",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705442476/lastproject/seccion15/wrrn2avsavnbile9eq3m.jpg",
    },
    {
      pregunta:
        "¿Qué tipo de ataque se produce cuando un atacante intenta adivinar la contraseña de un usuario probando múltiples combinaciones posibles?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811480/lastproject/seccion15/bdbmacph1oabgwmbls2g.png",
      opciones: [
        "Ataque de reenvío de cabeceras (Header Injection)",
        "Ataque XSS (Cross-Site Scripting)",
        "Ataque de fuerza bruta",
        "Ataque de denegación de servicio (DoS)",
      ],
      respuestaCorrecta: "Ataque de fuerza bruta",
      correction:
        "Un ataque de fuerza bruta es un método de prueba de acceso no autorizado que intenta descubrir una contraseña al probar múltiples combinaciones de claves. Este tipo de ataque se basa en la premisa de que, con suficientes intentos, un atacante eventualmente adivinará la contraseña correcta. se crea un formulario con un nuemero maximo de 3 intentos fallidos para evitar este tipo de ataque",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705442694/lastproject/seccion15/wupuwuhsq5bdrd48ovs2.jpg",
    },
    {
      pregunta:
        "¿Qué es una Content Security Policy (Política de Seguridad de Contenido) en una aplicación web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811480/lastproject/seccion15/bdbmacph1oabgwmbls2g.png",
      opciones: [
        "Una política que restringe las fuentes de contenido permitidas en una página web.",
        "Una política que solo se aplica a las cookies en una página web.",
        "Una política que garantiza que todos los recursos de terceros estén habilitados",
        "Una política que permite cualquier contenido en una página web.",
      ],
      respuestaCorrecta:
        "Una política que restringe las fuentes de contenido permitidas en una página web.",
      correction:
        "Una Content Security Policy (CSP) o Política de Seguridad de Contenido es una capa de seguridad que ayuda a prevenir y mitigar ataques de inyección de contenido, como Cross-Site Scripting (XSS). La CSP permite a los propietarios de sitios web declarar desde qué fuentes se pueden cargar los recursos en una página",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705442856/lastproject/seccion15/eo7rh68mj9sjjg04f1s7.jpg",
    },
    {
      pregunta:
        "¿Cuál es el propósito de las Cookies seguras (Secure Cookies) en una aplicación web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811480/lastproject/seccion15/bdbmacph1oabgwmbls2g.png",
      opciones: [
        "Mejorar el rendimiento del sitio web.",
        "Añadir efectos visuales a la página.",
        "Asegurar que las Cookies solo se transmitan a través de conexiones seguras (HTTPS).",
        "Almacenar información sensible en el navegador del usuario.",
      ],
      respuestaCorrecta:
        "Asegurar que las Cookies solo se transmitan a través de conexiones seguras (HTTPS).",
      correction:
        "El propósito principal de las Cookies seguras es garantizar que las cookies solo se envíen a través de conexiones cifradas (HTTPS) y no a través de conexiones no seguras (HTTP).",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705442978/lastproject/seccion15/ogexztommjcd0rhsvwom.jpg",
    },
    {
      pregunta:
        "¿Qué es una Cross-Site Request Forgery (CSRF) en una aplicación web?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704811480/lastproject/seccion15/bdbmacph1oabgwmbls2g.png",
      opciones: [
        "Un ataque que implica la ejecución de código malicioso en un sitio web.",
        "Un ataque que engaña a un usuario para que realice acciones no deseadas en su nombre. ",
        "Un ataque que intenta adivinar la contraseña de un usuario.",
        "Un ataque que roba información de la base de datos de una aplicación.",
      ],
      respuestaCorrecta:
        "Un ataque que engaña a un usuario para que realice acciones no deseadas en su nombre.",
      correction:
        "Cross-Site Request Forgery (CSRF) es una vulnerabilidad de seguridad en aplicaciones web que permite que un atacante realice acciones en nombre de un usuario sin su consentimiento. Para prevenir ataques CSRF, las aplicaciones web a menudo utilizan tokens CSRF (también conocidos como tokens anti-CSRF o tokens synchronizer) ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705443129/lastproject/seccion15/yym1jcvja5tugzmsdctg.jpg",
    },
  ];

  const textoMonstruo =
    "no creas que te dare a tu reina tan facilmente si no respondes nunca la veras denuevo ";
  const prueba = "Que necesito para comentar el console.log()";
  const respuesta = "export";

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
        styleClass={"fifteen"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"fifteen"}
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
        styleClass={"fifteen"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleSixteen(true);
  };

  const titulo = "Seguridad";

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

export default Seccion15;
