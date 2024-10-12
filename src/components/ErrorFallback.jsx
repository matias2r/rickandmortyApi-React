const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="mt-20 flex items-center justify-center">
        <div className="bg-neutral-800 border-l-4 border-orange-500 text-orange-500 p-4 rounded-md w-1/2 shadow-xl">
            <h2 className="text-xl font-semibold">Algo salió mal</h2>
            <p className="mt-2">Ocurrió un error inesperado:</p>
            <pre className="mt-2 p-2 bg-gray-900 rounded-md text-sm">{error.message}</pre>
            <button onClick={resetErrorBoundary} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 transition delay-60"> 
            Volver a intentar
            </button>
        </div>
        </div>

    );
  };
  
  export default ErrorFallback;
  