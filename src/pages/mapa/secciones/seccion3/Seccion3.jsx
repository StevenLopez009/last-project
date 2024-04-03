import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion3.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon3.gif";
import codigo from "../../../../assets/img/mapa/codigo3.png";

const Seccion3 = () => {
  const { setVisibleFour } = useSections();

  const preguntas = [
    {
      pregunta:
        "Para crear una funcion necesitas saber su forma ningun novato puede crear funciones ¿Cual es la forma correcta?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/fbs8lu9kmeqnlx5ruu7u.png",
      opciones: [
        "fun myFunction() =>codigo de la funcion {parametros}",
        "function = myFunction(parametros) {codigo de la funcion}",
        "declarar function = myFunction() {parametros}",
        "function myFunction() {} =>codigo de la funcion",
      ],
      respuestaCorrecta:
        "function = myFunction(parametros) {codigo de la funcion}",
      correction:
        "Una función en JavaScript es un bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes de un programa. Las funciones ayudan a organizar y modularizar el código, facilitando su mantenimiento y comprensión.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705357034/lastproject/seccion3/v9wbke1bxk4qilrjgajw.jpg",
    },
    {
      pregunta:
        "talves no seas tan novato con las funciones , lo pondre un poco mas dificil como se llaman los valores que van en los parentesis de la funcion",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/fbs8lu9kmeqnlx5ruu7u.png",
      opciones: ["pass", "argument", "parameters", "return"],
      respuestaCorrecta: "parameters",
      correction:
        "Los parámetros de una función son valores que la función espera recibir cuando es llamada. Estos valores se utilizan dentro del cuerpo de la función para realizar operaciones o cálculos. Los parámetros permiten que una función sea flexible y pueda manejar diferentes valores cada vez que es invocada",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707268810/lastproject/seccion3/smmdxesudmsbc7hze6gk.jpg",
    },
    {
      pregunta:
        "Prestame atencion cuando tengo una variable en una funcion no puedo acceder a ella de forma convencional a esto aqui le llamamos scope , ¿ que seria ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/fbs8lu9kmeqnlx5ruu7u.png",
      opciones: [
        "El tipo de dato de la variable.",
        "El lugar en el que la variable se declara y se puede acceder.",
        "El valor actual de la variable.",
        "La longitud de la variable.",
      ],
      respuestaCorrecta:
        "El lugar en el que la variable se declara y se puede acceder.",
      correction:
        "El 'scope' (ámbito) de una variable en programación se refiere a la región del código donde esa variable es válida y puede ser referenciada. En otras palabras, el scope determina dónde una variable puede ser utilizada y dónde no.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705355934/lastproject/seccion3/xwnjr7grm5ozqddywmzg.jpg",
    },
    {
      pregunta:
        "Vamos a poner las cosas un poco mas dificiles ya que hay demonios muy debiles por aqui ¿Qué hace la declaracion return en una funcion JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/sdltvnnehhdk3kv2xs6e.png",
      opciones: [
        "Detiene la ejecución de la función.",
        "Devuelve un valor desde la función.",
        "Define una variable local.",
        "Borra una variable.",
      ],
      respuestaCorrecta: "Devuelve un valor desde la función.",
      correction:
        "En JavaScript, la palabra clave return se utiliza dentro de una función para devolver un valor. Cuando una función alcanza una declaración return, la ejecución de la función se detiene, y el valor especificado después de return se devuelve a la ubicación desde donde se llamó la función.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705356038/lastproject/seccion3/vexbb9wqonhjhabvhv0l.jpg",
    },
    {
      pregunta:
        "En isla javascript no solo tenemos funciones normales tambien las tenemos anonimas  ¿Qué es una función anónima ?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/sdltvnnehhdk3kv2xs6e.png",
      opciones: [
        "Una función que no puede ser utilizada.",
        "Una función sin parámetros.",
        "Una función que siempre devuelve null.",
        "Una función que no tiene nombre.",
      ],
      respuestaCorrecta: "Una función que no tiene nombre.",
      correction:
        "Una función anónima en JavaScript es una función que no tiene un nombre asociado. En lugar de ser declarada con un nombre como en una función tradicional, una función anónima puede ser definida directamente en el lugar donde se necesita o asignada a una variable.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705356038/lastproject/seccion3/vexbb9wqonhjhabvhv0l.jpg",
    },
    {
      pregunta:
        "No quiero que molestes a mi jefe  asi que dime ¿Qué es una función de flecha en JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/sdltvnnehhdk3kv2xs6e.png",
      opciones: [
        "Una función que utiliza solo flechas en su código.",
        "Una función que siempre devuelve undefined.",
        "Una forma simplificada de escribir funciones anónimas.",
        "Una función que no puede recibir argumentos.",
      ],
      respuestaCorrecta:
        "Una forma simplificada de escribir funciones anónimas.",
      correction:
        "Una función de flecha en JavaScript es una forma más concisa de escribir funciones, introducida en ECMAScript 6 (ES6). Este tipo de función es conocido por su sintaxis más breve y su comportamiento particular con respecto al contexto de this. La sintaxis básica de una función de flecha es la siguiente:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707269059/lastproject/seccion3/pzka9x3hx5qofdzn1gd5.jpg",
    },
    {
      pregunta:
        "Has superado a mis ayudantes veamos si estas a la altura de llegar mi jefe ¿Cuál de las siguientes opciones es una función de orden superior en JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/vx4uvu9l5xymrprgn2hv.png",
      opciones: ["setTimeout()", "alert()", "parseInt()", "isNaN()"],
      respuestaCorrecta: "setTimeout()",
      correction:
        "Una función de orden superior en JavaScript es una función que toma una o más funciones como argumentos y/o devuelve una nueva función como resultado. En otras palabras, las funciones de orden superior tratan las funciones como ciudadanos de primera clase, permitiendo que se pasen como argumentos y se devuelvan como valores.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705357034/lastproject/seccion3/v9wbke1bxk4qilrjgajw.jpg",
    },
    {
      pregunta:
        "Veo que sigues avanzando , eso me molesta ¿Cuál es la diferencia entre null y undefined en la isla JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/vx4uvu9l5xymrprgn2hv.png",
      opciones: [
        "null significa 'sin valor', y undefined es un valor especial.",
        "null es un valor primitivo, mientras que undefined significa que una variable no está definida.",
        "null solo se usa en funciones, mientras que undefined se usa en variables.",
        "No hay diferencia, son iguales.",
      ],
      respuestaCorrecta:
        "null es un valor primitivo, mientras que undefined significa que una variable no está definida.",
      correction:
        "null se usa para indicar la ausencia intencional de valor, mientras que undefined se utiliza para indicar la falta de asignación o la ausencia predeterminada de valor.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705356941/lastproject/seccion3/jxmmlilvpg1ek7vc7mna.jpg",
    },
    {
      pregunta:
        "Ultimo asertijo para llegar a mi jefe ¿Cómo se llama el proceso de llamar a una función dentro de otra función en JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1701011621/lastproject/seccion3/vx4uvu9l5xymrprgn2hv.png",
      opciones: ["Anidación", "Encapsulación", "Concatenación", "Redefinición"],
      respuestaCorrecta: "Anidación",
      correction:
        "La anidación en JavaScript se refiere a la práctica de incluir una estructura dentro de otra. Puede implicar la anidación de funciones dentro de funciones, objetos dentro de objetos, arrays dentro de arrays, o combinaciones de estas estructuras.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705357175/lastproject/seccion3/wv0kntsqwg5ret8scwqs.jpg",
    },
  ];

  const textoMonstruo =
    "Soy Vulkaroth protector de fuego y funciones espero que tengas suficientes vidas para ofrecerme, los subditos de la reina sufrieron una envozcada poco antes de llegar aqui desconozco quienes raptaron a la reina , pero venderan las pertenencias de la reina en la ciudadela de los objetos";
  const prueba = "Crea la Invocacion de esta funcion";
  const respuesta = "saludar()";

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
        styleClass={"three"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"three"}
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
        styleClass={"three"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleFour(true);
  };

  const titulo = "Fuego y funciones";

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

export default Seccion3;
