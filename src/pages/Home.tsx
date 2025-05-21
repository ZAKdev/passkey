import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e4b9c;
  color: white;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1e4b9c 0%, #2c3e50 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const FeaturesSection = styled.div`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e4b9c;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar>
        <Logo>GMX</Logo>
        <Button variant="outline" onClick={() => navigate('/login')}>
          Log in
        </Button>
      </Navbar>

      <HeroSection>
        <HeroTitle>Secure Authentication with Passkeys</HeroTitle>
        <HeroSubtitle>
          Experience passwordless login with enhanced security
        </HeroSubtitle>
        <Button size="lg" onClick={() => navigate('/register')}>
          Get Started
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