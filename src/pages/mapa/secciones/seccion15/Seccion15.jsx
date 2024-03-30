import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion15.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion15 = () => {
  const { setVisibleSixteen } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido al bosque de la seguridad, cuando haces un formulario y alguien inserta código malicioso, sabes ¿qué tipo de ataque es?",
      opciones: [
        "Ataque CSRF (Cross-Site Request Forgery)",
        "Ataque XSS (Cross-Site Scripting)",
        "Ataque SQL Injection",
        "Ataque DoS (Denial of Service)",
      ],
      respuestaCorrecta: "Ataque XSS (Cross-Site Scripting)",
      correction:
        "El Ataque XSS (Cross-Site Scripting) es una vulnerabilidad de seguridad en aplicaciones web que permite a un atacante inyectar scripts maliciosos en páginas web visitadas por otros usuarios.",
    },
    {
      pregunta:
        "Te enseñaré una de estas medidas, te previene los ataques de inyección SQL, dime, ¿cuál es?",
      opciones: [
        "Validar y escapar las consultas SQL (SQL queries).",
        "Utilizar contraseñas débiles en la base de datos.",
        "Confiar en la seguridad del navegador.",
        "Ninguna de las anteriores.",
      ],
      respuestaCorrecta: "Validar y escapar las consultas SQL (SQL queries).",
      correction:
        "La técnica comúnmente utilizada para retrasar la ejecución de JavaScript hasta que la página esté completamente cargada es colocar el código JavaScript al final del cuerpo del documento HTML o usar el atributo defer en la etiqueta <script>.",
    },
    {
      pregunta:
        "¿Qué ataque intenta engañar al usuario para que realice acciones no deseadas en una aplicación web en su nombre?",
      opciones: [
        "Ataque XSS (Cross-Site Scripting)",
        "Ataque CSRF (Cross-Site Request Forgery)",
        "Ataque de fuerza bruta",
        "Ataque de reenvío de cabeceras (Header Injection)",
      ],
      respuestaCorrecta: "Ataque CSRF (Cross-Site Request Forgery)",
      correction:
        "El Ataque CSRF (Cross-Site Request Forgery) es una vulnerabilidad de seguridad que se produce cuando un atacante aprovecha la confianza que un sitio web tiene en el navegador del usuario para realizar acciones no deseadas en nombre del usuario sin su consentimiento",
    },
    {
      pregunta:
        "¿Qué medida de seguridad en JavaScript se utiliza para restringir las solicitudes de recursos cruzados en navegadores?",
      opciones: [
        "Cookies seguras (Secure Cookies)",
        "Content Security Policy (Política de Seguridad de Contenido)",
        "Cors Policy (Política de Compartición de Recursos)",
        "Same-Origin Policy (Política del Mismo Origen).",
      ],
      respuestaCorrecta: "Same-Origin Policy (Política del Mismo Origen)",
      correction:
        "La Same-Origin Policy (Política del Mismo Origen) es una política de seguridad implementada en los navegadores web para restringir las solicitudes de recursos (como scripts, imágenes, o datos) a un dominio diferente al que originó la propia página.",
    },
    {
      pregunta:
        "¿Cuál de las siguientes opciones es una técnica de protección contra ataques de Cross-Site Scripting (XSS) en JavaScript?",
      opciones: [
        "Uso de contraseñas fuertes",
        "Sanitización y validación de datos de entrada",
        "Habilitar JavaScript en todas las páginas",
        "Utilizar el mismo origen (Same-Origin) en las solicitudes de recursos",
      ],
      respuestaCorrecta: "Sanitización y validación de datos de entrada",
      correction:
        "La sanitización y validación de datos de entrada son prácticas esenciales para garantizar la seguridad y la integridad de una aplicación. Ambos procesos son importantes para prevenir vulnerabilidades y asegurarse",
    },
    {
      pregunta:
        "¿Qué tipo de ataque se produce cuando un atacante intenta adivinar la contraseña de un usuario probando múltiples combinaciones posibles?",
      opciones: [
        "Ataque de reenvío de cabeceras (Header Injection)",
        "Ataque XSS (Cross-Site Scripting)",
        "Ataque de fuerza bruta",
        "Ataque de denegación de servicio (DoS)",
      ],
      respuestaCorrecta: "Ataque de fuerza bruta",
      correction:
        "Un ataque de fuerza bruta es un método de prueba de acceso no autorizado que intenta descubrir una contraseña al probar múltiples combinaciones de claves. Este tipo de ataque se basa en la premisa de que, con suficientes intentos, un atacante eventualmente adivinará la contraseña correcta. se crea un formulario con un nuemero maximo de 3 intentos fallidos para evitar este tipo de ataque",
    },
    {
      pregunta:
        "¿Qué es una Content Security Policy (Política de Seguridad de Contenido) en una aplicación web?",
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
    },
    {
      pregunta:
        "¿Cuál es el propósito de las Cookies seguras (Secure Cookies) en una aplicación web?",
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
    },
    {
      pregunta:
        "¿Qué es una Cross-Site Request Forgery (CSRF) en una aplicación web?",
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
    setVisibleSixteen(true);
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

export default Seccion15;
