export interface User {
  id: string;
  username: string;
  displayName: string;
  created: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface PasskeyCredential {
  id: string;
  publicKey: string;
  createdAt: string;
  lastUsed?: string;
  deviceName?: string;
}

export interface RegisterCredentialRequest {
  username: string;
  displayName: string;
}

export interface RegisterCredentialResponse {
  options: any;
}

export interface VerifyRegistrationRequest {
  username: string;
  credential: any;
}

export interface VerifyRegistrationResponse {
  verified: boolean;
  user?: User;
}

export interface AuthenticationRequest {
  username?: string;
}

export interface AuthenticationResponse {
  options: any;
}

export interface VerifyAuthenticationRequest {
  credential: any;
}

export interface VerifyAuthenticationResponse {
  verified: boolean;
  user?: User;
}