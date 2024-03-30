import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion8.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion8 = () => {
  const { setVisibleNine } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a las tierras de la POO, para iniciar tu viaje es necesario saber el principal, concepto de la programación orientada a objetos. ",
      opciones: ["Condicionales", "Encapsulación", "Ciclos", "Herencia"],
      respuestaCorrecta: "Herencia",
      correction:
        "La herencia en la programación orientada a objetos (POO) es un concepto que permite a una clase (llamada subclase o clase derivada) heredar propiedades y métodos de otra clase (llamada superclase o clase base)",
    },
    {
      pregunta:
        "Es necesario que me demuestres, ¿qué es un objeto en JavaScript? Para seguir.",
      opciones: [
        "Una entidad que agrupa datos y métodos",
        "Un bucle que genera variables",
        "Una función que retorna mas funciones",
        "Un comentario en el código",
      ],
      respuestaCorrecta: "Una entidad que agrupa datos y métodos",
      correction:
        "Un objeto es una estructura de datos que permite almacenar y organizar datos de manera eficiente. Los objetos en JavaScript son colecciones de pares clave-valor, donde las claves son cadenas o símbolos, y los valores pueden ser cualquier tipo de dato, incluyendo números, cadenas, funciones, otros objetos, entre otros.",
    },
    {
      pregunta:
        "La encapsulación es utilizada en las tierras de la programación orientada a objetos con qué fin.",
      opciones: [
        "Definir una variable global",
        "Ocultar datos y limitar el acceso a ellos",
        "Crear una clase",
        "Imprimir información en la consola",
      ],
      respuestaCorrecta: "Ocultar datos y limitar el acceso a ellos",
      correction:
        "Este principio implica agrupar datos (propiedades) y los métodos (funciones) que operan sobre esos datos en una única entidad llamada 'objeto'. La idea central es encapsular o esconder la implementación interna del objeto, y solo exponer una interfaz que permita interactuar con él de manera controlada.",
    },
    {
      pregunta:
        "Además de los objetos, las clases son importantes, defíneme qué son. ",
      opciones: [
        "Un constructor de funciones",
        "Un constructor de arreglos",
        "Un constructor de objetos",
        "Un constructor de arreglos funcionales",
      ],
      respuestaCorrecta: "Un constructor de objetos",
      correction:
        "En programación orientada a objetos (POO), una clase es una plantilla o un plano para crear objetos. Representa un conjunto de propiedades y métodos que comparten los objetos creados a partir de esa clase.",
    },
    {
      pregunta:
        "Ya sabes que es una clase con que fin creamos un constructor en una clase, puede que se ponga difícil a veces pero continua si deseas ver libre a tu reina",
      opciones: [
        "Realizar operaciones matemáticas",
        "Definir una variable global",
        "Inicializar objetos y configurar sus propiedades",
        "Imprimir mensajes en la consola",
      ],
      respuestaCorrecta: "Inicializar objetos y configurar sus propiedades",
      correction:
        "El constructor de una clase es un método especial que se llama automáticamente cuando se crea una instancia (un objeto) de esa clase. El constructor tiene la responsabilidad de inicializar las propiedades del objeto y realizar cualquier configuración necesaria en el momento de la creación.",
    },
    {
      pregunta:
        "Similar  a la herencia en otras tierras en la programación orientada a objetos que es la herencia.",
      opciones: [
        "La capacidad de una clase de heredar propiedades y métodos de otra clase",
        "La creación de nuevas funciones de objetos y clases",
        "La encapsulación de datos",
        "La definición de variables objetos y  funcionalidades",
      ],
      respuestaCorrecta:
        "La capacidad de una clase de heredar propiedades y métodos de otra clase",
      correction:
        "La herencia es un concepto clave en la programación orientada a objetos (POO) que permite la creación de nuevas clases basadas en clases existentes. En términos simples, una clase derivada o subclase hereda propiedades y métodos de una clase base o superclase.",
    },
    {
      pregunta:
        "Eres un buen guerrero quiza puedas liberar a tu reina para crear una clase utilizamos una palabra clave dime cuál es.",
      opciones: ["Instanceof", "Class", "This;", "ConstructorClass"],
      respuestaCorrecta: "Class",
      correction:
        "La palabra clave para crear una clase en JavaScript, a partir de la versión ECMAScript 6 (ES6) en adelante, es class. Puedes utilizar la palabra clave class para definir tanto clases base como clases derivadas (subclases).",
    },
    {
      pregunta:
        "Vas bien  guerrero, explícame el polimorfismo y continuaremos.",
      opciones: [
        "La capacidad de una clase para heredar de múltiples clases a la vez",
        "La capacidad de una clase para tener múltiples constructores",
        "La capacidad de diferentes objetos de responder al mismo método de manera diferente",
        "La creación de objetos sin una clase",
      ],
      respuestaCorrecta:
        "La capacidad de diferentes objetos de responder al mismo método de manera diferente",
      correction:
        "El polimorfismo es un concepto fundamental en la programación orientada a objetos (POO) que permite que un objeto pueda tomar múltiples formas o que distintos objetos puedan responder de manera diferente a la misma operación o método.",
    },
    {
      pregunta:
        "Ya sabes que es una clase, un objeto , que son las instancias y la herencia , has aprendido mucho guerrero dentro de una clase como defino un metodo",
      opciones: ["Method()", "AddMethod()", "DefineMethod()", "Function"],
      respuestaCorrecta: "Function",
      correction:
        "Dentro de una clase en programación orientada a objetos (POO), un método se define utilizando la palabra clave function en JavaScript,  Un método es simplemente una función que está asociada con una clase y puede ser invocada en instancias de esa clase.",
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
    setVisibleNine(true);
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

export default Seccion8;
