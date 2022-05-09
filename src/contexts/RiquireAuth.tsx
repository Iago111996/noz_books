import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function RiquireAtuth({ children }: { children: JSX.Element }) {
  const { signed } = useAuth();

  return signed ? children : <Navigate to="/" />;
}
