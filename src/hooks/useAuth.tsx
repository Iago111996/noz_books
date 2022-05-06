import React, { useContext } from "react";
import { AuthContext, AuthContextIterface } from "../contexts/AuthContext";

export function useAuth(): AuthContextIterface {
  const context = useContext(AuthContext);
  return context;
}
