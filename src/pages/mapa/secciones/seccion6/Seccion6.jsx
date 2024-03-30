import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion6.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion6 = () => {
  const { setVisibleSeven } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a las tierras del DOM para obtener informacion de tu reina deberas preguntarle al jefe  pero primero necesito que me digas ¿Qué método se utiliza para seleccionar un elemento por su id ?",
      opciones: [
        "Document.getElementByTagName",
        "Document.getElementById",
        "Document.getElementsByClass",
        "Document.getElemntByClassname",
      ],
      respuestaCorrecta: "Document.getElementById",
      correction:
        "document.getElementById es un método en JavaScript que se utiliza para obtener una referencia a un elemento HTML mediante su identificador único (ID). Cada elemento HTML puede tener un atributo id que debe ser único en todo el documento.",
    },
    {
      pregunta:
        "Has agregado un elemento al final pero ¿Cómo se elimina el último elemento de un arreglo?",
      opciones: ["Remove()", "Pop()", "Delete()", "Splice()"],
      respuestaCorrecta: "Pop()",
      correction:
        "Para eliminar el último elemento de un arreglo en JavaScript, puedes utilizar el método pop(). Este método modifica el arreglo original, eliminando el último elemento y devolviendo ese elemento. Aquí tienes un ejemplo:",
    },
    {
      pregunta:
        "En la isla HTML hay un párrafo necesito seleccionar todos sus elementos ¿como lo harias?",
      opciones: [
        "document.getElementByTagName('p')",
        "document.querySelectorAll('p')",
        "document.getElementById('p')",
        "document.getElementsByClass('p')",
      ],
      respuestaCorrecta: "document.querySelectorAll('p')",
      correction:
        "document.querySelectorAll() es un método en JavaScript que permite seleccionar uno o varios elementos del DOM (Modelo de Objetos del Documento) utilizando selectores CSS. ",
    },
    {
      pregunta:
        "En la isla HTML podemos establecer contenido a sus elementos desde la isla JS ¿como lo haríamos?",
      opciones: [
        "Element.innerHTML",
        "Element.AgregarContent",
        "Element.insertText",
        "Todas las anteriores ",
      ],
      respuestaCorrecta: "Element.innerHTML",
      correction:
        "Puedes establecer el contenido HTML de un elemento en el documento utilizando la propiedad innerHTML en JavaScript",
    },
    {
      pregunta:
        "Desde las tierras del dom no solo podemos seleccionar y agregar también podemos eliminar elementos pero dime con cuál método",
      opciones: ["Remove", "DeleteNode", "EraseChild", "RemoveElement"],
      respuestaCorrecta: "Remove",
      correction:
        "El método remove() es una forma más moderna y sencilla de eliminar un elemento:",
    },
    {
      pregunta:
        "En las tierras del Dom modificamos los atributos de los elementos HTML con una propiedad ",
      opciones: [
        "ModificateAttribute",
        "ModifyAttribute",
        "ChangeAttribute",
        "SetAttribute",
      ],
      respuestaCorrecta: "SetAttribute",
      correction:
        "Para modificar los atributos de los elementos HTML en el DOM (Modelo de Objetos del Documento) en JavaScript, puedes utilizar la propiedad setAttribute():",
    },
    {
      pregunta:
        "En las tierras del dom tenemos un botón con el id mybutton necesito agregar un evento clic, hazlo y te dejaré conocer al jefe",
      opciones: [
        "document.querySelector('#myButton').addEventListener('click', myFunction);",
        "document.getElementById('myButton').addEventListener('click', myFunction);",
        "myButton.onclick = myFunction;",
        "myButton.addClickEvent(myFunction);",
      ],
      respuestaCorrecta:
        "document.getElementById('myButton').addEventListener('click', myFunction);",
      correction:
        "Esta línea de código establece un manejo de eventos para el botón con el ID 'myButton'. Cuando el botón se hace clic, se ejecutará la función myFunction. Este enfoque es comúnmente utilizado para responder a interacciones del usuario en una página web.",
    },
    {
      pregunta:
        "Necesitamos capturar el valor de un input , muéstrame como lo harías",
      opciones: [
        "GetElementValue",
        "Input.Value",
        "GetInputValue",
        "SetInputValue",
      ],
      respuestaCorrecta: "Input.Value",
      correction:
        "La propiedad value de un elemento input en JavaScript se utiliza para obtener o establecer el valor actual de un campo de entrada (input). Aquí tienes una breve explicación:",
    },
    {
      pregunta:
        "Pronto conoceras al jefe, antes necesitamos seleccionar varios elementos por su clase",
      opciones: [
        "GetElementsByClassName",
        "SelectElementsByClass)",
        "QueryElementsByClass",
        "GetElementsByTag",
      ],
      respuestaCorrecta: "GetElementsByClassName",
      correction:
        "Para seleccionar varios elementos por su clase en JavaScript, puedes utilizar el método getElementsByClassName()",
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
    setVisibleSeven(true);
  };

  const titulo = "Ciudadela de Objetos";

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

export default Seccion6;
