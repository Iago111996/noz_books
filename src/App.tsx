import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RiquireAtuth } from "./contexts/RiquireAuth";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <RiquireAtuth>
                <Home />
              </RiquireAtuth>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
