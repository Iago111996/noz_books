import React from "react";

import { Route, Routes } from "react-router-dom";

import { RiquireAtuth } from "../contexts/RiquireAuth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RiquireAtuth>
            <Home />
          </RiquireAtuth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
