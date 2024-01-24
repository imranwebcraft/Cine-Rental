import { createContext } from "react";

// Movie Context
const MovieContext = createContext(null);
// Theme context
const ThemeContext = createContext("light");
export { ThemeContext };
export default MovieContext;
