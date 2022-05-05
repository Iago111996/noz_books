import api from "../services/api";

export const useApi = () => ({
  valedateToken: async () => {},
  signin: async (email: string, password: string) => {
    const response = await api.post("auth/sign-in", {
      email,
      password,
    });

    return response.data;
  },
});
