import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion5.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";

const Seccion5 = () => {
  const { setVisibleSix } = useSections();

  const preguntas = [
    {
      pregunta:
        "Has llegado a los glaciares aquí trabajamos con arreglos espero que sepas como agregar un elemento al final de un arreglo",
      opciones: ["Push()", "Add()", "Append()", "Insert()"],
      respuestaCorrecta: "Push()",
      correction:
        "Puedes agregar un elemento al final de un arreglo en JavaScript utilizando el método push(). Aquí tienes un ejemplo",
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
        "El jefe que aquí reina nos hace trabajar mucho, espero que puedas vencerlo, ayudame a saber la longitud de un arreglo",
      opciones: ["Longitud()", "Size()", "Count()", "Length"],
      respuestaCorrecta: "Length",
      correction:
        "En JavaScript, puedes obtener la longitud (o tamaño) de un arreglo utilizando la propiedad length. Aquí tienes un ejemplo:",
    },
    {
      pregunta:
        "Para seguir avanzando es necesario que conozcas como acceder al primer elemento de un arreglo",
      opciones: ["Arr[1]", "Arr.first()", "Arr.first(1)", "Arr[0]"],
      respuestaCorrecta: "Arr[0]",
      correction:
        "Para acceder al primer elemento de un arreglo en JavaScript, puedes utilizar la notación de corchetes [ ] junto con el índice 0. Los índices en JavaScript comienzan desde 0, por lo que el primer elemento tiene el índice 0. Aquí tienes un ejemplo:",
    },
    {
      pregunta:
        "Eres bueno ayudándonos con los arreglos, ayudanos a ordenar un arreglo de forma ascendente",
      opciones: ["Sort()", "Order()", "Ascending()", "Arrange()"],
      respuestaCorrecta: "Sort()",
      correction:
        "En JavaScript, puedes ordenar un arreglo de forma ascendente utilizando el método sort(). Aquí tienes un ejemplo:",
    },
    {
      pregunta:
        "Para encontrar un elemento dentro de un arreglo se utiliza una función¿ cuál es?",
      opciones: ["Position()", "IndexOf()", "Search()", "Locate()"],
      respuestaCorrecta: "IndexOf()",
      correction:
        "Para encontrar un elemento dentro de un arreglo en JavaScript, puedes utilizar el método indexOf() o el método find(). Ambos métodos te permiten buscar un valor específico en un arreglo. Aquí te muestro ambas formas:",
    },
    {
      pregunta:
        "Ayudame con esto y te dejaré continuar tengo una condición y necesito filtrar los elementos de mi arreglo de acuerdo a esta condición",
      opciones: ["Select()", "Find()", "Filter()", "Match()."],
      respuestaCorrecta: "Filter()",
      correction:
        "El método filter() en JavaScript se utiliza con arreglos para crear un nuevo arreglo que contiene solo los elementos que cumplen con una condición especificada. ",
    },
    {
      pregunta:
        "Demuéstrame que tienes lo necesario para enfrentar al jefe de los arreglos, como clonarías un arreglo",
      opciones: ["Arr.copy()", "Arr.clone()", "Arr.slice()", "Arr.duplicate()"],
      respuestaCorrecta: "Arr.slice()",
      correction:
        "El método slice() sin argumentos devuelve una copia superficial del arreglo original. Es otra forma común de clonar un arreglo.",
    },
    {
      pregunta:
        "Hemos trabajado mucho con los arreglos tu última tarea será invertir el orden de un arreglo ¿como lo harías?",
      opciones: ["Flip()", "Invert()", "Backwards()", "Reverse()"],
      respuestaCorrecta: "Reverse()",
      correction:
        "Puedes invertir el orden de un arreglo en JavaScript utilizando el método reverse(). Este método modifica el arreglo original invirtiendo el orden de sus elementos. Aquí tienes un ejemplo:",
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
    setVisibleSix(true);
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

export default Seccion5;
