import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiquireAtuth } from "./contexts/RiquireAuth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AppRoutes } from "./routes/app.routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <AppRoutes />

      <GlobalStyle />
    </>
  );
}

export default App;
