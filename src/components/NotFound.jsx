import React from "react";

const NotFound = () => {

    return (
        <div className="flex flex-col items-center justify-center mt-20 text-white p-6">
      <h1 className="text-5xl font-bold mb-2">404 - Página No Encontrada </h1>
      <h2><i className="fa-solid fa-triangle-exclamation"></i></h2>
      <p className="text-lg mb-6">Lo sentimos, la página que buscas no existe.</p>
      <a href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
        Regresar a Inicio
      </a>
    </div>
    )
  };

export default NotFound