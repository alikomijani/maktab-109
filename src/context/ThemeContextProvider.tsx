import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { theme } from "../theme/theme";
import { ReactNode } from "react";

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
function ThemeContextProvider(props: Props) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </CacheProvider>
  );
}
export default ThemeContextProvider;
