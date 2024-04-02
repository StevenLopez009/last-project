import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion6.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon6.png";
import codigo from "../../../../assets/img/mapa/codigo6.jpeg";

const Seccion6 = () => {
  const { setVisibleSeven } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a las tierras del DOM o necesito que me digas ¿Qué método se utiliza para seleccionar un elemento por su id ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: [
        "Document.getElementByTagName",
        "Document.getElementById",
        "Document.getElementsByClass",
        "Document.getElemntByClassname",
      ],
      respuestaCorrecta: "Document.getElementById",
      correction:
        "document.getElementById es un método en JavaScript que se utiliza para obtener una referencia a un elemento HTML mediante su identificador único (ID). Cada elemento HTML puede tener un atributo id que debe ser único en todo el documento.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707406806/lastproject/seccion6/zwzu2mzhfrj04cnte6tf.jpg",
    },

    {
      pregunta:
        "En la isla HTML hay un párrafo necesito seleccionar todos sus elementos ¿como lo harias?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: [
        "document.getElementByTagName('p')",
        "document.querySelectorAll('p')",
        "document.getElementById('p')",
        "document.getElementsByClass('p')",
      ],
      respuestaCorrecta: "document.querySelectorAll('p')",
      correction:
        "document.querySelectorAll() es un método en JavaScript que permite seleccionar uno o varios elementos del DOM (Modelo de Objetos del Documento) utilizando selectores CSS. ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707325433/lastproject/seccion6/pawmizjpbnytcpsj6uzd.jpg",
    },
    {
      pregunta:
        "En la isla HTML podemos establecer contenido a sus elementos desde la isla JS ¿como lo haríamos?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: [
        "Element.innerHTML",
        "Element.AgregarContent",
        "Element.insertText",
        "Todas las anteriores ",
      ],
      respuestaCorrecta: "Element.innerHTML",
      correction:
        "Puedes establecer el contenido HTML de un elemento en el documento utilizando la propiedad innerHTML en JavaScript",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707325662/lastproject/seccion6/ntah1wfxefpa62tertet.jpg",
    },
    {
      pregunta:
        "Desde las tierras del dom no solo podemos seleccionar y agregar también podemos eliminar elementos pero dime con cuál método",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: ["Remove", "DeleteNode", "EraseChild", "RemoveElement"],
      respuestaCorrecta: "Remove",
      correction:
        "El método remove() es una forma más moderna y sencilla de eliminar un elemento:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707325965/lastproject/seccion6/fujsuxnunlkmgwvpssck.jpg",
    },
    {
      pregunta:
        "En las tierras del Dom modificamos los atributos de los elementos HTML con una propiedad ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: [
        "ModificateAttribute",
        "ModifyAttribute",
        "ChangeAttribute",
        "SetAttribute",
      ],
      respuestaCorrecta: "SetAttribute",
      correction:
        "Para modificar los atributos de los elementos HTML en el DOM (Modelo de Objetos del Documento) en JavaScript, puedes utilizar la propiedad setAttribute():",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705363791/lastproject/seccion6/ralcca1vzwirl8xgkza6.jpg",
    },
    {
      pregunta:
        "En las tierras del dom tenemos un botón con el id mybutton necesito agregar un evento clic, hazlo y te dejaré conocer al jefe",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
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
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705363964/lastproject/seccion6/qckpyotf3hwockbsgbmx.jpg",
    },
    {
      pregunta:
        "Necesitamos capturar el valor de un input , muéstrame como lo harías",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: [
        "GetElementValue",
        "Input.Value",
        "GetInputValue",
        "SetInputValue",
      ],
      respuestaCorrecta: "Input.Value",
      correction:
        "La propiedad value de un elemento input en JavaScript se utiliza para obtener o establecer el valor actual de un campo de entrada (input). Aquí tienes una breve explicación:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705364150/lastproject/seccion6/srchoeatqvlh3bzb8hgb.jpg",
    },
    {
      pregunta:
        "Pronto conoceras al jefe, antes necesitamos seleccionar varios elementos por su clase",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810383/lastproject/seccion6/v3x7texcupjs2pss2wbf.png",
      opciones: [
        "GetElementsByClassName",
        "SelectElementsByClass)",
        "QueryElementsByClass",
        "GetElementsByTag",
      ],
      respuestaCorrecta: "GetElementsByClassName",
      correction:
        "Para seleccionar varios elementos por su clase en JavaScript, puedes utilizar el método getElementsByClassName()",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707406998/lastproject/seccion6/clba4dwrjdowz7modhdd.jpg",
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
        styleClass={"six"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"six"}
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
        styleClass={"six"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleSeven(true);
  };

  const titulo = "Tierras del DOM";

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

export default Seccion6;
