import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1e4b9c;
  color: white;
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

const AuthButton = styled(Button)`
  background-color: white;
  color: #1e4b9c;
  border: none;
  
  &:hover {
    background-color: #e9ecef;
    color: #1e4b9c;
  }
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1e4b9c 0%, #2c3e50 100%);
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0;
  }
`;

const FeaturesSection = styled.div`
  padding: 2rem 1rem;
  background-color: #f8f9fa;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1e4b9c;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.875rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <Container>
      <Navbar>
        <Logo>GMX</Logo>
        <UserSection>
          {isAuthenticated && user && (
            <UserName>Welcome, {user.displayName}</UserName>
          )}
          <AuthButton onClick={handleAuthAction}>
            {isAuthenticated ? 'Logout' : 'Log in'}
          </AuthButton>
        </UserSection>
      </Navbar>

      <HeroSection>
        <HeroTitle>Secure Authentication with Passkeys</HeroTitle>
        <HeroSubtitle>
          Experience passwordless login with enhanced security
        </HeroSubtitle>
        <Button size="lg" onClick={() => navigate(isAuthenticated ? '/dashboard' : '/register')}>
          {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
        </Button>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Passwordless Security</FeatureTitle>
            <FeatureDescription>
              Say goodbye to passwords. Use your device's biometric authentication
              for secure access.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Cross-Device Support</FeatureTitle>
            <FeatureDescription>
              Seamlessly access your account across all your devices with
              synchronized passkeys.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Enhanced Protection</FeatureTitle>
            <FeatureDescription>
              Built on modern security standards to protect against phishing and
              other cyber threats.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </Container>
  );
};

export default Home;