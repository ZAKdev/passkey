import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    Container,
    Navbar,
    Logo,
    UserSection,
    UserName,
    AuthButton,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    FeaturesSection,
    FeaturesGrid,
    FeatureCard,
    FeatureTitle,
    FeatureDescription,
} from './Home.styled';
import Button from '../../components/Button';

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
                <Button 
                    size="lg" 
                    onClick={() => navigate(isAuthenticated ? '/dashboard' : '/register')}
                >
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