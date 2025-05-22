import React, { useEffect, useState } from 'react';
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
    UsersSection,
    UsersSectionTitle,
    UsersGrid,
    UserCard,
    UserAvatar,
    UserCardName,
    UserCardEmail,
    FeaturesSection,
    FeaturesGrid,
    FeatureCard,
    FeatureTitle,
    FeatureDescription,
} from './Home.styled';
import Button from '../../components/Button';
import { User } from './Home.types';

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout, user } = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data.slice(0, 6)); // Only take first 6 users
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

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

            <UsersSection>
                <UsersSectionTitle>Our Growing Community</UsersSectionTitle>
                <UsersGrid>
                    {!loading && users.map(user => (
                        <UserCard key={user.id}>
                            <UserAvatar 
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                                alt={user.name}
                            />
                            <UserCardName>{user.name}</UserCardName>
                            <UserCardEmail>{user.email}</UserCardEmail>
                        </UserCard>
                    ))}
                </UsersGrid>
            </UsersSection>

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