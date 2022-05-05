import { createContext } from "react";
import { User } from "../interfaces/userInterface";

export interface AuthContextType {
  signed: boolean;
  user: User | null;
  signin(email: string, password: string): Promise<boolean>;
  signout(): void;
  validateToken(): Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
