/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable dot-notation */
import React, { ReactNode, useLayoutEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "./AuthContext";

import { useLocalStorage } from "../hooks/useLocalStorage";

import api from "../services/api";
import { ErrorIterface } from "../interfaces/errorIterface";
import { User } from "../interfaces/userInterface";

interface AuthProviderType {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("authToken", null);

  const navigate = useNavigate();

  async function signin(email: string, password: string) {
    const response = await api.post("/auth/sign-in", {
      email,
      password,
    });

    if (response.data) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.headers.authorization}`;
      api.defaults.headers.common["Content-Type"] = "application/json";
      setUser(response.data);
      setToken(response.headers.authorization);

      return true;
    }
    return false;
  }

  function signout() {
    setUser(null);
    setToken(null);
    api.defaults.headers.common["Authorization"] = `Bearer ${null}`;
    navigate("/login");
  }

  async function refreshToken() {
    const x = await true;
  }

  function catchError(
    error: any,
    setErrors: (item: React.SetStateAction<ErrorIterface>) => void
  ) {
    const { status } = error.response;

    function changeValues() {
      const handler = setTimeout(() => {
        setErrors({ hasError: false, error: "" });
      }, 3000);
      return () => {
        clearTimeout(handler);
      };
    }

    switch (status) {
      case 500:
        setErrors({ hasError: true, error: "Infelizmente, algo deu errado." });
        changeValues();
        return;

      case 401:
        setErrors({ hasError: true, error: "Não autorizado." });
        changeValues();
        signout();
        break;

      default:
        break;
    }
  }

  useLayoutEffect(() => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signin,
        signout,
        catchError,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
