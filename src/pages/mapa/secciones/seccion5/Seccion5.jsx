import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion5.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon5.gif";
import codigo from "../../../../assets/img/mapa/codigo5.jpeg";

const Seccion5 = () => {
  const { setVisibleSix } = useSections();

  const preguntas = [
    {
      pregunta:
        "Has llegado a los glaciares aquí trabajamos con arreglos espero que sepas como agregar un elemento al final de un arreglo",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Push()", "Add()", "Append()", "Insert()"],
      respuestaCorrecta: "Push()",
      correction:
        "Puedes agregar un elemento al final de un arreglo en JavaScript utilizando el método push(). Aquí tienes un ejemplo",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707315708/lastproject/seccion5/ehzhwvhuovd9jhnwgf7n.jpg",
    },
    {
      pregunta:
        "Has agregado un elemento al final pero ¿Cómo se elimina el último elemento de un arreglo?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Remove()", "Pop()", "Delete()", "Splice()"],
      respuestaCorrecta: "Pop()",
      correction:
        "Para eliminar el último elemento de un arreglo en JavaScript, puedes utilizar el método pop(). Este método modifica el arreglo original, eliminando el último elemento y devolviendo ese elemento. Aquí tienes un ejemplo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705360445/lastproject/seccion4/zi2ennqay3fp5di4kszt.jpg",
    },
    {
      pregunta:
        "El jefe que aquí reina nos hace trabajar mucho, espero que puedas vencerlo, ayudame a saber la longitud de un arreglo",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Longitud()", "Size()", "Count()", "Length"],
      respuestaCorrecta: "Length",
      correction:
        "En JavaScript, puedes obtener la longitud (o tamaño) de un arreglo utilizando la propiedad length. Aquí tienes un ejemplo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707314645/lastproject/seccion5/fmscijznj7l7q4h8x6zh.jpg",
    },
    {
      pregunta:
        "Para seguir avanzando es necesario que conozcas como acceder al primer elemento de un arreglo",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Arr[1]", "Arr.first()", "Arr.first(1)", "Arr[0]"],
      respuestaCorrecta: "Arr[0]",
      correction:
        "Para acceder al primer elemento de un arreglo en JavaScript, puedes utilizar la notación de corchetes [ ] junto con el índice 0. Los índices en JavaScript comienzan desde 0, por lo que el primer elemento tiene el índice 0. Aquí tienes un ejemplo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707315859/lastproject/seccion5/z6k9qujpdbvcovoz2ww5.jpg",
    },
    {
      pregunta:
        "Eres bueno ayudándonos con los arreglos, ayudanos a ordenar un arreglo de forma ascendente",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Sort()", "Order()", "Ascending()", "Arrange()"],
      respuestaCorrecta: "Sort()",
      correction:
        "En JavaScript, puedes ordenar un arreglo de forma ascendente utilizando el método sort(). Aquí tienes un ejemplo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705360777/lastproject/seccion4/in5dvrowtqc1jldnctoe.jpg",
    },
    {
      pregunta:
        "Para encontrar un elemento dentro de un arreglo se utiliza una función¿ cuál es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Position()", "IndexOf()", "Search()", "Locate()"],
      respuestaCorrecta: "IndexOf()",
      correction:
        "Para encontrar un elemento dentro de un arreglo en JavaScript, puedes utilizar el método indexOf() o el método find(). Ambos métodos te permiten buscar un valor específico en un arreglo. Aquí te muestro ambas formas:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705361048/lastproject/seccion4/jyo7ogxxpglis03jegzp.jpg",
    },
    {
      pregunta:
        "Ayudame con esto y te dejaré continuar tengo una condición y necesito filtrar los elementos de mi arreglo de acuerdo a esta condición",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Select()", "Find()", "Filter()", "Match()."],
      respuestaCorrecta: "Filter()",
      correction:
        "El método filter() en JavaScript se utiliza con arreglos para crear un nuevo arreglo que contiene solo los elementos que cumplen con una condición especificada. ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705361170/lastproject/seccion4/pfp9mvifjbs5wlulex11.jpg",
    },
    {
      pregunta:
        "Demuéstrame que tienes lo necesario para enfrentar al jefe de los arreglos, como clonarías un arreglo",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Arr.copy()", "Arr.clone()", "Arr.slice()", "Arr.duplicate()"],
      respuestaCorrecta: "Arr.slice()",
      correction:
        "El método slice() sin argumentos devuelve una copia superficial del arreglo original. Es otra forma común de clonar un arreglo.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707316126/lastproject/seccion5/jhyuic6lkypbngg2gurp.jpg",
    },
    {
      pregunta:
        "Hemos trabajado mucho con los arreglos tu última tarea será invertir el orden de un arreglo ¿como lo harías?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701012071/lastproject/seccion4/q1uiid1hskjupabmo5ex.png",
      opciones: ["Flip()", "Invert()", "Backwards()", "Reverse()"],
      respuestaCorrecta: "Reverse()",
      correction:
        "Puedes invertir el orden de un arreglo en JavaScript utilizando el método reverse(). Este método modifica el arreglo original invirtiendo el orden de sus elementos. Aquí tienes un ejemplo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705361438/lastproject/seccion4/lymcblcpbxe0n7m7kvko.jpg",
    },
  ];

  const textoMonstruo =
    "Hola viajero has llegado hasta mi castillo de arreglos acambio de tus vidas te dire que tu reina fue comprada por uno de mis generales los Elfos son muy buenos con la magia de JavaScript desconozco que pretende hacer con tu reina Elfa, fue llevada a las tierras del Golem DOM";
  const prueba = "Necesito agregar 'Hada' al final de mi arreglo";
  const respuesta = "criaturas.push('Hada')";

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
        styleClass={"five"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"five"}
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
        styleClass={"five"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleSix(true);
  };

  const titulo = "Castillo de arreglos";

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

export default Seccion5;
