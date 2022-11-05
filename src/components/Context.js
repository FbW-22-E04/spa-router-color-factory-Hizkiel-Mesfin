import { createContext, useState } from "react";

export const colorContext = createContext();

export default function ContextProvider({ children }) {
  const [color, setColor] = useState({
    name: "",
    value: "",
  });

  const [colorArr, setColorArr] = useState([]);

  return (
    <colorContext.Provider value={{ color, setColor, colorArr, setColorArr }}>
      {children}
    </colorContext.Provider>
  );
}
