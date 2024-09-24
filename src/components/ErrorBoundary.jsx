import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static actualizacionEstado(error) {
        return { hasError: true };
    }

    registroError(error, errorInfo) {
        console.error("Error Registrado:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo salio mal. Intenta ingresar mas tarde.</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;