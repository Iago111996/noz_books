import { createContext } from "react";

import { User } from "../interfaces/userInterface";

export interface AuthContextIterface {
  signed: boolean;
  user: User | null;
  signin(email: string, password: string): Promise<boolean>;
  signout(): void;
  refreshToken(): Promise<void>;
  catchError(error: any): void;
}

export const AuthContext = createContext<AuthContextIterface>(
  {} as AuthContextIterface
);
