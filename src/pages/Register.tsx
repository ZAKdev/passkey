import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, Mail, User, ArrowRight, Info } from 'lucide-react';
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
  padding: ${props => props.theme.space[4]};
  background-color: white;
`;

const RegisterCard = styled(Card)`
  width: 100%;
  max-width: 450px;
  animation: ${fadeIn} 0.5s ease-out;
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
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.primary[600]};
  text-transform: uppercase;
  letter-spacing: -1px;
`;

const Title = styled.h1`
  margin-bottom: ${props => props.theme.space[2]};
  color: ${props => props.theme.colors.gray[900]};
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.base};
`;

const Form = styled.form`
  margin-bottom: ${props => props.theme.space[6]};
`;

const SubmitButton = styled(Button)`
  margin-top: ${props => props.theme.space[4]};
`;

const InfoBox = styled.div`
  background-color: ${props => props.theme.colors.primary[50]};
  border-radius: ${props => props.theme.radii.base};
  padding: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[6]};
  display: flex;
  align-items: flex-start;
  border: 1px solid ${props => props.theme.colors.primary[100]};
  
  svg {
    margin-right: ${props => props.theme.space[3]};
    min-width: 20px;
    color: ${props => props.theme.colors.primary[600]};
  }
  
  p {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.gray[700]};
    margin: 0;
  }
`;

const Footer = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  
  a {
    color: ${props => props.theme.colors.primary[600]};
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    
    svg {
      margin-left: ${props => props.theme.space[1]};
      transition: transform 0.2s;
    }
    
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.colors.primary[700]};
      
      svg {
        transform: translateX(2px);
      }
    }
  }
`;

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Username is required');
      return;
    }
    
    if (!displayName.trim()) {
      setError('Display name is required');
      return;
    }
    
    setError(null);
    setIsSubmitting(true);
    
    try {
      const success = await register(username, displayName);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Registration failed. Please try a different username.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Container>
      <RegisterCard>
        <CardHeader>
          <Logo>GMX</Logo>
          <Title>Create Account</Title>
          <Subtitle>Sign up for secure passkey authentication</Subtitle>
        </CardHeader>
        
        {error && (
          <Alert variant="error" title="Registration Error">
            {error}
          </Alert>
        )}
        
        <InfoBox>
          <Info size={20} />
          <p>
            Passkeys are a more secure way to sign in without passwords. 
            You'll use your device's biometrics (Face ID, Touch ID, Windows Hello) 
            or security key to create your account.
          </p>
        </InfoBox>
        
        <Form onSubmit={handleRegister}>
          <Input
            label="Username"
            placeholder="Choose a username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            icon={<Mail size={16} />}
            fullWidth
            disabled={isSubmitting}
          />
          
          <Input
            label="Display Name"
            placeholder="Your name"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            icon={<User size={16} />}
            fullWidth
            disabled={isSubmitting}
          />
          
          <SubmitButton 
            type="submit"
            fullWidth 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : (
              <>
                <Fingerprint size={16} />
                Create Passkey Account
              </>
            )}
          </SubmitButton>
        </Form>
        
        <Footer>
          Already have an account?{' '}
          <a href="/login">
            Sign in <ArrowRight size={14} />
          </a>
        </Footer>
      </RegisterCard>
    </Container>
  );
};

export default Register;