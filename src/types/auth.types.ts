import { IBasicResponse } from "./Response.types";

export interface SignupRequest {
  shelter: string;
  email: string;
  password: string;
  password2: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse extends IBasicResponse {
  token: string | undefined;
  id?: string;
  email?: string;
}