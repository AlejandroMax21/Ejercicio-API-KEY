// metodo que crea clases para errores diversos
export const createErrorFactory = (name) => {
    return class CustomizedError extends Error {
        constructor (message){
            super(message);
            this.name = name;
            this.stack = '';
        }
    }
}