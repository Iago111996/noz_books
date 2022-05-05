import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function RiquireAtuth({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  return auth.signed ? children : <Navigate to="/" />;
}
