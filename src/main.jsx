import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log("Service Worker registrado con éxito:", registration);
      },
      function (error) {
        console.log("Error al registrar el Service Worker:", error);
      }
    );
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
