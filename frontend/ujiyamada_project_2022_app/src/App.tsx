import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MainRouter } from "./components/router/MainRouter";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#9ccc65",
      light: "#cfff95",
      dark: "#6b9b37"
    },
    secondary: {
      main: "#fffde7",
      light: "#ffffff",
      dark: "#cccab5"
    }
  },
  typography: {
    fontFamily: ["Roboto", '"Noto Sans JP"', '"Helvetica"', "Arial", "sans-serif"].join(",")
  }
});

export const App: FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <MainRouter />
    </ThemeProvider>
  );
};
