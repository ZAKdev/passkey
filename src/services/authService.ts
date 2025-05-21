import { 
  RegisterCredentialRequest, 
  RegisterCredentialResponse,
  VerifyRegistrationRequest,
  VerifyRegistrationResponse,
  AuthenticationRequest,
  AuthenticationResponse,
  VerifyAuthenticationRequest,
  VerifyAuthenticationResponse,
  User
} from '../types';

// Mock API URLs - would be replaced with real backend endpoints
const API_BASE_URL = '/api';
const REGISTER_URL = `${API_BASE_URL}/register`;
const VERIFY_REGISTRATION_URL = `${API_BASE_URL}/verify-registration`;
const LOGIN_URL = `${API_BASE_URL}/login`;
const VERIFY_LOGIN_URL = `${API_BASE_URL}/verify-login`;

// For demo purposes, we'll mock the API responses
const MOCK_DELAY = 500; // ms

// Initialize storage with persisted data if available
const loadPersistedData = () => {
  try {
    const persistedUsers = localStorage.getItem('registeredUsers');
    const persistedCredentials = localStorage.getItem('mockCredentials');
    
    return {
      users: persistedUsers ? new Map(Object.entries(JSON.parse(persistedUsers))) : new Map<string, User>(),
      credentials: persistedCredentials ? new Map(Object.entries(JSON.parse(persistedCredentials))) : new Map<string, any>()
    };
  } catch (error) {
    console.error('Error loading persisted data:', error);
    return {
      users: new Map<string, User>(),
      credentials: new Map<string, any>()
    };
  }
};

// Initialize with persisted data
let { users: registeredUsers, credentials: mockCredentials } = loadPersistedData();

// Helper to persist data to localStorage
const persistData = () => {
  try {
    localStorage.setItem('registeredUsers', JSON.stringify(Object.fromEntries(registeredUsers)));
    localStorage.setItem('mockCredentials', JSON.stringify(Object.fromEntries(mockCredentials)));
  } catch (error) {
    console.error('Error persisting data:', error);
  }
};

// Helper to generate random ID
const generateId = () => Math.random().toString(36).substring(2, 15);

// Helper to generate random challenge
const generateChallenge = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, Array.from(array)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

// Mock registration flow
export const registerCredential = async (
  username: string, 
  displayName: string
): Promise<RegisterCredentialResponse> => {
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  
  const userId = generateId();
  
  // Generate registration options
  const options = {
    challenge: generateChallenge(),
    rp: {
      name: 'PassKey Auth Demo',
      id: window.location.hostname
    },
    user: {
      id: userId,
      name: username,
      displayName: displayName
    },
    pubKeyCredParams: [
      { type: 'public-key', alg: -7 }, // ES256
      { type: 'public-key', alg: -257 } // RS256
    ],
    timeout: 60000,
    attestation: 'none',
    authenticatorSelection: {
      authenticatorAttachment: 'platform',
      userVerification: 'preferred',
      residentKey: 'required'
    }
  };
  
  return { options };
};

export const verifyRegistration = async (
  username: string,
  credential: any
): Promise<VerifyRegistrationResponse> => {
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  
  try {
    // Store the credential for this user
    mockCredentials.set(username, credential);
    
    // Create a new user
    const user: User = {
      id: credential.id || generateId(),
      username,
      displayName: username,
      created: new Date().toISOString()
    };
    
    registeredUsers.set(username, user);
    
    // Persist the updated data
    persistData();
    
    return {
      verified: true,
      user
    };
  } catch (error) {
    console.error('Registration verification error:', error);
    return {
      verified: false
    };
  }
};

// Mock authentication flow
export const startLogin = async (
  username: string
): Promise<AuthenticationResponse> => {
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  
  const options = {
    challenge: generateChallenge(),
    timeout: 60000,
    rpId: window.location.hostname,
    userVerification: 'preferred',
    allowCredentials: []
  };
  
  return { options };
};

export const verifyLogin = async (
  credential: any
): Promise<VerifyAuthenticationResponse> => {
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  
  try {
    // For demo purposes, find the first registered user
    const username = Array.from(registeredUsers.keys())[0];
    const user = registeredUsers.get(username);
    
    if (!user) {
      throw new Error('No registered users found');
    }
    
    return {
      verified: true,
      user
    };
  } catch (error) {
    console.error('Login verification error:', error);
    return {
      verified: false
    };
  }
};