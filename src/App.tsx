import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    // Show loading state while checking auth
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Public route component that redirects to dashboard if already authenticated
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    // Show loading state while checking auth
    return <div>Loading...</div>;
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;