import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { darkTheme, lightTheme } from "../theme/theme";
import { ReactNode, createContext, useState } from "react";

import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

type Props = {
  children: ReactNode;
};

export const ToggleThemeContext = createContext({
  toggleTheme: () => {},
});
function ThemeContextProvider(props: Props) {
  const [useDark, setUseDark] = useState(false);
  const toggleTheme = () => {
    setUseDark((old) => !old);
  };
  return (
    <CacheProvider value={cacheRtl}>
      <ToggleThemeContext.Provider
        value={{
          toggleTheme,
        }}
      >
        <ThemeProvider theme={useDark ? darkTheme : lightTheme}>
          {props.children}
        </ThemeProvider>
      </ToggleThemeContext.Provider>
    </CacheProvider>
  );
}
export default ThemeContextProvider;
