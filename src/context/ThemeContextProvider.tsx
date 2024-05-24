import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (_: string) => {},
});

type Props = {
  children?: ReactNode;
};

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
