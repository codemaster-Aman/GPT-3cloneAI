import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import Summary from "./pages/Summary";
import Navbar from "./components/Navbar";
import Register from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";

import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";

//Routes is container whereas Route used for Routing

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
