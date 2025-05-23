import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, Mail, ArrowRight, Home } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f3f3f3;
  position: relative;
  
  @media (min-width: 768px) {
    padding: ${props => props.theme.space[4]};
  }
`;

const BackButton = styled(Button)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  width: 40px;
  height: 40px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  svg {
    margin: 0;
  }
  
  @media (min-width: 768px) {
    position: absolute;
  }
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 450px;
  animation: ${fadeIn} 0.5s ease-out;
  padding: 1.5rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    padding: ${props => props.theme.space[6]};
    margin-top: 0;
  }
`;

const CardHeader = styled.div`
  margin-bottom: ${props => props.theme.space[6]};
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[6]};
  font-size: 2rem;
  font-weight: 700;
  color: #1c449b;
  text-transform: uppercase;
  letter-spacing: -1px;
  
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const Title = styled.h1`
  margin-bottom: ${props => props.theme.space[2]};
  color: ${props => props.theme.colors.gray[900]};
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 0.875rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  margin-bottom: ${props => props.theme.space[6]};
`;

const SubmitButton = styled(Button)`
  margin-top: ${props => props.theme.space[4]};
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.space[6]} 0;
  color: ${props => props.theme.colors.gray[500]};
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${props => props.theme.colors.gray[200]};
  }
  
  span {
    padding: 0 ${props => props.theme.space[4]};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const PasskeyButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[2]};
`;

const Footer = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  
  a {
    color: #6e9804;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    
    svg {
      margin-left: ${props => props.theme.space[1]};
      transition: transform 0.2s;
    }
    
    &:hover {
      color: #587a03;
      text-decoration: none;
      
      svg {
        transform: translateX(2px);
      }
    }
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Username is required');
      return;
    }
    
    setError(null);
    setIsSubmitting(true);
    
    try {
      const success = await login(username);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Authentication failed. Please check your username and try again.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handlePasskeyLogin = async () => {
    try {
      setError(null);
      setIsSubmitting(true);
      
      const success = await login('');
      if (success) {
        navigate('/dashboard');
      } else {
        setError('No passkey found. Please register first or use username login.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Container>
      <BackButton variant="outline" onClick={() => navigate('/')}>
        <Home size={16} />
      </BackButton>
      
      <LoginCard>
        <CardHeader>
          <Logo>GMX</Logo>
          <Title>Welcome Back</Title>
          <Subtitle>Sign in to your account using passkeys</Subtitle>
        </CardHeader>
        
        {error && (
          <Alert variant="error" title="Authentication Error">
            {error}
          </Alert>
        )}
        
        <PasskeyButton onClick={handlePasskeyLogin} disabled={isSubmitting}>
          <Fingerprint size={20} />
          Sign in with Passkey
        </PasskeyButton>
        
        <Divider>
          <span>or continue with username</span>
        </Divider>
        
        <Form onSubmit={handleLogin}>
          <Input
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            icon={<Mail size={16} />}
            fullWidth
            disabled={isSubmitting}
          />
          
          <SubmitButton 
            type="submit"
            fullWidth 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Continue with Username'}
          </SubmitButton>
        </Form>
        
        <Footer>
          Don't have an account?{' '}
          <a href="/register">
            Register now <ArrowRight size={14} />
          </a>
        </Footer>
      </LoginCard>
    </Container>
  );
};

export default Login;