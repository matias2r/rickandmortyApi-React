const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
        <h2 className="text-xl font-semibold">Algo salió mal</h2>
        <p className="mt-2">Ocurrió un error inesperado:</p>
        <pre className="mt-2 p-2 bg-gray-100 rounded-md text-sm">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Volver a intentar
        </button>
      </div>
    );
  };
  
  export default ErrorFallback;
  