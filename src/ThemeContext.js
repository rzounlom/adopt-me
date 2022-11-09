import { createContext } from "react";

const ThemContext = createContext(["lightblue", () => {}]); //return empty function in case default not set

export default ThemContext;
