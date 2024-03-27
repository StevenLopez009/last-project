import "./Biblioteca.css";
import image0 from "../../assets/img/biblioteca/background-image0.jpg";
import image1 from "../../assets/img/biblioteca/background-image1.jpg";
import image2 from "../../assets/img/biblioteca/background-image2.jpg";
import image3 from "../../assets/img/biblioteca/background-image3.jpg";
import image4 from "../../assets/img/biblioteca/background-image4.jpg";
import image5 from "../../assets/img/biblioteca/background-image5.jpg";
import image6 from "../../assets/img/biblioteca/background-image6.jpg";
import image7 from "../../assets/img/biblioteca/background-image7.jpg";
import image8 from "../../assets/img/biblioteca/background-image8.jpg";
import image9 from "../../assets/img/biblioteca/background-image9.jpg";
import image10 from "../../assets/img/biblioteca/background-image10.jpg";
import image11 from "../../assets/img/biblioteca/background-image11.jpg";
import image12 from "../../assets/img/biblioteca/background-image12.jpg";
import image13 from "../../assets/img/biblioteca/background-image13.jpg";
import image14 from "../../assets/img/biblioteca/background-image15.jpg";
import image15 from "../../assets/img/biblioteca/background-image16.jpg";

// ... import other images as needed

const Modal = ({ closeModal, titulos, infoLibro, selectedLibro }) => {
  const backgroundImage = {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10,
    11: image11,
    12: image12,
    13: image13,
    14: image14,
    15: image15,
  }[selectedLibro];
  return (
    <div className="modal">
      <div
        className="modal-content"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="parrafo-content">
          <p>{infoLibro[selectedLibro]}</p>
        </div>
        <h2>{titulos[selectedLibro]}</h2>
      </div>
    </div>
  );
};

export default Modal;
