import React, { ReactNode, useMemo } from "react";

import { AuthContext } from "./AuthContext";

import { useApi } from "../hooks/useApi";
import { useLocalStorage } from "../hooks/useLocalStorage";

import api from "../services/api";

interface AuthProviderType {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useLocalStorage("user", null);

  async function signin(email: string, password: string) {
    const response = await api.post("auth/sign-in", {
      email,
      password,
    });

    console.log(response, "oi");

    if (response.data) {
      setUser(response.data);

      return true;
    }

    return false;
  }

  async function signout() {
    setUser(null);
    // setValuesLocal("", "", "", "");
  }

  // const setValuesLocal = (
  //   token: string,
  //   expiration: string,
  //   userName: string,
  //   userEmail: string
  // ) => {
  //   setName(userName);
  //   setEmail(userEmail);
  //   setToken(token);
  //   setDate(expiration);

  //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   api.defaults.headers.common["Content-Type"] = "application/json";
  // };

  const validateToken = async () => {};

  // useLayoutEffect(() => {
  //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // }, []);

  const obj = useMemo(
    () => ({
      signed: !!user,
      user,
      signin,
      signout,
      validateToken,
    }),
    []
  );

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
}
