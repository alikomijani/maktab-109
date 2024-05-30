import { createTheme } from "@mui/material/styles";
import { yellow, red } from "@mui/material/colors";
export const theme = createTheme({
  direction: "rtl",
  palette: {
    background: {
      default: "#e5e5e5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "vazirmatn",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
