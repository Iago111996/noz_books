import useSWR from "swr";

import api from "../services/api";
import { useAuth } from "./useAuth";

export function useFetch<Data = any, Error = any>(url: string) {
  const { catchError } = useAuth();

  const isCAll = url.includes("undefined");

  const { data, error } = useSWR<Data, Error>(
    !isCAll ? url : null,
    async () => {
      const response = await api.get(url);

      return response.data;
    }
  );

  if (error) {
    catchError(error);
  }

  return { data, isLoading: !error && !data };
}
