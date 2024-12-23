import React from "react";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Aos from 'aos'
import 'aos/dist/aos.css'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    error: {
      main: "#f44336", // Default error color
      contrastText: "#fff", // Ensures text is readable
    },
  },
});

const ErrorMessage = ({children}) => {
  Aos.init()
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ margin: "10px 0", width: '90%'}} data-aos='zoom-in' data-aos-duration='1000'>
        <Alert severity="error" sx={{ backgroundColor: "rgba(255, 0, 0, 0.2)" }}>
          {children}
        </Alert>
      </div>
    </ThemeProvider>
  );
};

export default ErrorMessage;
