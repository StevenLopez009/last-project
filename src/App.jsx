import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./pages/menu/Menu";
import Inicio from "./pages/inicio/Inicio";

import { Biblioteca, Cuartel, Mapa, Taberna } from "./pages";
import {
  Seccion1,
  Seccion10,
  Seccion11,
  Seccion12,
  Seccion13,
  Seccion14,
  Seccion15,
  Seccion16,
  Seccion2,
  Seccion3,
  Seccion4,
  Seccion5,
  Seccion6,
  Seccion7,
  Seccion8,
  Seccion9,
} from "./pages/mapa/secciones";
import { SectionsProvider } from "./pages/mapa/context/SectionContext";
import ComponentSections from "./pages/mapa/ComponentSections";

function App() {
  return (
    <BrowserRouter>
      <SectionsProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Biblioteca" element={<Biblioteca />} />
          <Route path="/Cuartel" element={<Cuartel />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/Secciones" element={<ComponentSections />} />
          <Route path="/Taberna" element={<Taberna />} />
          <Route path="/seccion1" element={<Seccion1 />} />
          <Route path="/seccion2" element={<Seccion2 />} />
          <Route path="/seccion3" element={<Seccion3 />} />
          <Route path="/seccion4" element={<Seccion4 />} />
          <Route path="/seccion5" element={<Seccion5 />} />
          <Route path="/seccion6" element={<Seccion6 />} />
          <Route path="/seccion7" element={<Seccion7 />} />
          <Route path="/seccion8" element={<Seccion8 />} />
          <Route path="/seccion9" element={<Seccion9 />} />
          <Route path="/seccion10" element={<Seccion10 />} />
          <Route path="/seccion11" element={<Seccion11 />} />
          <Route path="/seccion12" element={<Seccion12 />} />
          <Route path="/seccion13" element={<Seccion13 />} />
          <Route path="/seccion14" element={<Seccion14 />} />
          <Route path="/seccion15" element={<Seccion15 />} />
          <Route path="/seccion16" element={<Seccion16 />} />
        </Routes>
      </SectionsProvider>
    </BrowserRouter>
  );
}

export default App;
