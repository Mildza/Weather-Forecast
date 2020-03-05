import { createContext } from "react";

const ErrorContext = createContext({ message: "", setError: () => {} });

export default ErrorContext;
