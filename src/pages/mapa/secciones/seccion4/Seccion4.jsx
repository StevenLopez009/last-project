import ComponentPortada from "../../../ComponentPortada";
import backgroundImage from "../../../../assets/img/mapa/seccion4.jpg";
import ComponentQuestion from "../ComponentQuestion";
import ComponentCorrection from "../ComponentCorrection";
import ComponentCongratulation from "../ComponentCongratulation";
import ComponentFinal from "../ComponentFinal";
import { useSections } from "../../context/SectionContext";
import { useQuiz } from "../../hook/useQuiz";
import jefe from "../../../../assets/img/mapa/demon4.gif";
import codigo from "../../../../assets/img/mapa/codigo4.jpeg";

const Seccion4 = () => {
  const { setVisibleFive } = useSections();

  const preguntas = [
    {
      pregunta:
        "Bienvenido a la ciudadela de los objetos espero que sepas ¿Qué es un objeto en JavaScript?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810221/lastproject/seccion5/dmqpdvn66kn15vzdsjhb.png",
      opciones: [
        "Una función que realiza tareas específicas.",
        "Una colección de propiedades y métodos relacionados.",
        "Una variable que almacena un único valor.",
        "Un operador de comparación",
      ],
      respuestaCorrecta: "Una colección de propiedades y métodos relacionados.",
      correction:
        "En JavaScript, un objeto es una estructura de datos que permite almacenar y organizar información. Los objetos en JavaScript son colecciones de pares clave-valor, donde cada clave (también llamada propiedad) está asociada a un valor.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705357647/lastproject/seccion5/cxy0xlfgasbplubtglri.jpg",
    },
    {
      pregunta:
        "Ya sabes que es un objeto, pero necesitó que busques una propiedad dentro de él ¿como lo harías?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810221/lastproject/seccion5/dmqpdvn66kn15vzdsjhb.png",
      opciones: [
        "Usando paréntesis ().",
        "Usando corchetes [].",
        "Usando el operador de módulo (%).",
        "Usando el operador de suma (+).",
      ],
      respuestaCorrecta: "Usando corchetes [].",
      correction:
        "Puedes buscar una propiedad en un objeto en JavaScript utilizando la notación de corchetes. La notación de corchetes te permite acceder a una propiedad de un objeto mediante una expresión dentro de corchetes []",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705357647/lastproject/seccion5/cxy0xlfgasbplubtglri.jpg",
    },
    {
      pregunta:
        "Existe en la ciudadela una notación para acceder a las propiedades de los objetos¿ cuál es?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810221/lastproject/seccion5/dmqpdvn66kn15vzdsjhb.png",
      opciones: [
        "Notación de asterisco (objeto*propiedad).",
        "Notación de paréntesis (objeto(propiedad)).",
        "Notación de llaves (objeto{propiedad}).",
        "Notación de punto (objeto.propiedad).",
      ],
      respuestaCorrecta: "Notación de punto (objeto.propiedad).",
      correction:
        "La notación del punto en objetos es una forma de acceder a las propiedades y métodos de un objeto en JavaScript. Esta notación utiliza un punto . seguido del nombre de la propiedad o método que se quiere acceder. Aquí hay una breve explicación:.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705357890/lastproject/seccion5/z3x3nt5vkndxvlbmwzoq.jpg",
    },
    {
      pregunta:
        "Ya sabes que es un objeto, dime ahora que es una propiedad, si quieres seguir avanzando ",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810221/lastproject/seccion5/dmqpdvn66kn15vzdsjhb.png",
      opciones: [
        "Una función que realiza una tarea específica.",
        "Un valor asociado a una clave en un objeto.",
        "Un tipo de bucle.",
        "Una declaración condicional.",
      ],
      respuestaCorrecta: "Un valor asociado a una clave en un objeto.",
      correction:
        "Una propiedad es una asociación entre un nombre (también llamado clave o identificador) y un valor que está almacenado en un objeto. Los objetos en JavaScript son colecciones de pares clave-valor, y cada par clave-valor en un objeto representa una propiedad.",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705358003/lastproject/seccion5/rc3l3lbsn2ymnnqjv4qt.jpg",
    },
    {
      pregunta:
        "Estás avanzando mucho, mi jefe se molestará conmigo dime ¿Cuál de los siguientes métodos se utiliza para eliminar una propiedad de un objeto?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810226/lastproject/seccion5/sbhgizomjhbxdxsvci7o.png",
      opciones: ["Remove", "Erase", "Delete", "Drop"],
      respuestaCorrecta: "Delete",
      correction:
        "El método delete en JavaScript se utiliza para eliminar una propiedad de un objeto. La sintaxis básica es la siguiente:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705358134/lastproject/seccion5/cjjtlycbjwqacryylkmq.jpg",
    },
    {
      pregunta:
        "Ya has llegado hasta aquí es tiempo de que crees un objeto ¿Cómo lo harías?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810226/lastproject/seccion5/sbhgizomjhbxdxsvci7o.png",
      opciones: [
        "Mediante una declaración de variable.",
        "Utilizando la palabra clave new.",
        "Con el constructor new Object",
        "Todas las anteriores.",
      ],
      respuestaCorrecta: "Todas las anteriores.",
      correction:
        "puedes crear un objeto mediante la declaracion de una variable, utilizando la palabra clave new , con la funcion Object.create()",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1705359289/lastproject/seccion5/aijlq6lqq88kzn67t68k.jpg",
    },
    {
      pregunta: "Ya has creado un objeto ahora como agregarías una propiedad",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810226/lastproject/seccion5/sbhgizomjhbxdxsvci7o.png",
      opciones: [
        "Utilizando la palabra clave add.()",
        "Usando la notación de punto.",
        "Usando la notación de corchetes.",
        "Utilizando el método addProperty().",
      ],
      respuestaCorrecta: "Usando la notación de corchetes.",
      correction:
        "Para agregar o modificar una propiedad de un objeto en JavaScript utilizando corchetes, puedes usar la notación de corchetes [ ]. Aquí te muestro cómo hacerlo:",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707269390/lastproject/seccion4/ne9z6upwxlc7rfnsoaep.jpg",
    },
    {
      pregunta:
        "No quiero que molestes a mi jefe así que te tengo esta tarea ¿ cuál es la forma en que verificas si un objeto tiene una propiedad?",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810229/lastproject/seccion5/zim2igz60v6uk4ollykj.png",
      opciones: [
        "Utilizando if (propiedad in objeto).",
        "Utilizando if (objeto have propiedad).",
        "Utilizando if (objeto.propiedad === function property).",
        "Utilizando if (objeto has property).",
      ],
      respuestaCorrecta: "Utilizando if (propiedad in objeto).",
      correction:
        "Para verificar si un objeto tiene una propiedad específica, puedes utilizar el operador in",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707269849/lastproject/seccion4/idtr7oxbshhxqe2fw1dk.jpg",
    },
    {
      pregunta:
        "Ya has creado objetos, propiedades, y sabes como verificarlas espero que conozcas que es un método en un objeto",
      imagen:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1704810229/lastproject/seccion5/zim2igz60v6uk4ollykj.png",
      opciones: [
        "Una función que realiza operaciones matemáticas.",
        "Una propiedad que almacena datos.",
        "Una función que está asociada a un objeto y realiza acciones específicas.",
        "Una variable que almacena valores numéricos.",
      ],
      respuestaCorrecta:
        "Una función que está asociada a un objeto y realiza acciones específicas.",
      correction:
        "En el contexto de objetos en programación, un método es una función que está asociada a un objeto en particular. En JavaScript, los métodos son propiedades de objetos que tienen valores de tipo función. ",
      imagenCorreccion:
        "https://res.cloudinary.com/dyvk6gcjy/image/upload/v1707270126/lastproject/seccion4/i1uwrhkm3mgiiubzoxra.jpg",
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
        styleClass={"four"}
        imagen={imagen}
      />
    );
  };

  const renderCongratulation = () => {
    return (
      <ComponentCongratulation
        handleNextQuestion={handleNextQuestion}
        styleClass={"four"}
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
        styleClass={"four"}
      />
    );
  };

  const handleShowSection = () => {
    setVisibleFive(true);
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

export default Seccion4;
