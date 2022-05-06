import { useState } from "react";
import useSWR from "swr";

import { ErrorIterface } from "../interfaces/errorIterface";

import api from "../services/api";
import { useAuth } from "./useAuth";

export function useFetch<Data = any, Error = any>(url: string) {
  const { catchError } = useAuth();

  const isCAll = url.includes("undefined");

  const [errors, setErrors] = useState({
    hasError: false,
    error: "",
  } as ErrorIterface);

  const { data, error } = useSWR<Data, Error>(
    !isCAll ? url : null,
    async () => {
      const response = await api.get(url);

      return response.data;
    }
  );

  if (error) {
    catchError(error, setErrors);
  }

  return { data, isLoading: !error && !data, errors };
}
