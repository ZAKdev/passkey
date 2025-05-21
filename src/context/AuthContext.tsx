import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { AuthState, User } from '../types';
import { startRegistration, startAuthentication } from '@simplewebauthn/browser';
import { registerCredential, verifyRegistration, startLogin, verifyLogin } from '../services/authService';

interface AuthContextType extends AuthState {
  login: (username: string) => Promise<boolean>;
  register: (username: string, displayName: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Helper function to convert ArrayBuffer to Base64 string
const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

// Helper function to recursively process credential data
const processCredentialData = (obj: any): any => {
  if (obj instanceof ArrayBuffer) {
    return arrayBufferToBase64(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => processCredentialData(item));
  }
  
  if (obj !== null && typeof obj === 'object') {
    const processed: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(obj)) {
      processed[key] = processCredentialData(value);
    }
    return processed;
  }
  
  return obj;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          setState({
            user: JSON.parse(userData),
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setState(prevState => ({ ...prevState, isLoading: false }));
        }
      } catch (error) {
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Failed to restore session',
        });
      }
    };
    
    checkAuth();
  }, []);
  
  const register = async (username: string, displayName: string): Promise<boolean> => {
    try {
      setState(prevState => ({ ...prevState, isLoading: true, error: null }));
      
      // Get registration options from server
      const response = await registerCredential(username, displayName);
      
      // Create credentials in browser
      const credential = await startRegistration(response.options);
      
      // Process the credential data to handle ArrayBuffers
      const processedCredential = processCredentialData(credential);
      
      // Verify registration with server
      const verification = await verifyRegistration(username, processedCredential);
      
      if (verification.verified && verification.user) {
        setState({
          user: verification.user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        localStorage.setItem('user', JSON.stringify(verification.user));
        return true;
      }
      
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: 'Registration failed',
      }));
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      }));
      return false;
    }
  };
  
  const login = async (username: string): Promise<boolean> => {
    try {
      setState(prevState => ({ ...prevState, isLoading: true, error: null }));
      
      // Get authentication options from server
      const response = await startLogin(username);
      
      // Perform authentication in browser
      const credential = await startAuthentication(response.options);
      
      // Process the credential data to handle ArrayBuffers
      const processedCredential = processCredentialData(credential);
      
      // Verify with server
      const verification = await verifyLogin(username, processedCredential);
      
      if (verification.verified && verification.user) {
        setState({
          user: verification.user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        localStorage.setItem('user', JSON.stringify(verification.user));
        return true;
      }
      
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: 'Authentication failed',
      }));
      return false;
    } catch (error) {
      console.error('Login error:', error);
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Authentication failed',
      }));
      return false;
    }
  };
  
  const logout = () => {
    localStorage.removeItem('user');
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };
  
  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};