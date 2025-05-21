import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Fingerprint, Key, KeyRound, Shield, ArrowRight, Smartphone, Home } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;
  padding-top: ${props => props.theme.space[12]};
  
  @media (min-width: 768px) {
    padding: 2rem;
    padding-top: ${props => props.theme.space[12]};
  }
`;

const BackButton = styled(Button)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 40px;
  height: 40px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin: 0;
  }
  
  @media (min-width: 768px) {
    left: 2rem;
  }
`;

const WelcomeSection = styled.div`
  margin-bottom: ${props => props.theme.space[8]};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.gray[900]};
  margin-bottom: ${props => props.theme.space[2]};
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 1rem;
  margin-bottom: ${props => props.theme.space[6]};
  
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[8]};
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${props => props.theme.space[6]};
  }
`;

const CardContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[4]};
  color: ${props => props.theme.colors.primary[500]};
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const CardTitle = styled.h3`
  margin-bottom: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.gray[900]};
  font-size: 1.25rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 0.875rem;
  margin-bottom: ${props => props.theme.space[4]};
  flex-grow: 1;
  
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

const Section = styled.div`
  margin-bottom: ${props => props.theme.space[8]};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.space[4]};
  color: ${props => props.theme.colors.gray[900]};
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  
  svg {
    margin-right: ${props => props.theme.space[2]};
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const KeysList = styled.div`
  display: grid;
  gap: ${props => props.theme.space[4]};
`;

const KeyCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.space[4]};
  transition: transform 0.2s;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const KeyDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const KeyInfo = styled.div`
  margin-left: ${props => props.theme.space[3]};
`;

const KeyName = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.gray[900]};
`;

const KeyMeta = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[500]};
`;

const InfoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  background-color: ${props => props.theme.colors.primary[50]};
  color: ${props => props.theme.colors.primary[700]};
  border-radius: ${props => props.theme.radii.full};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 500;
  margin-left: ${props => props.theme.space[2]};
  
  svg {
    width: 12px;
    height: 12px;
    margin-right: ${props => props.theme.space[1]};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.space[6]};
  color: ${props => props.theme.colors.gray[500]};
  background-color: ${props => props.theme.colors.gray[100]};
  border-radius: ${props => props.theme.radii.lg};
  
  @media (min-width: 768px) {
    padding: ${props => props.theme.space[10]};
  }
`;

// Mock data for passkeys
const mockPasskeys = [
  {
    id: '1',
    name: 'MacBook Pro',
    type: 'Touch ID',
    lastUsed: 'Just now',
    isRecent: true,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    type: 'Face ID',
    lastUsed: '2 days ago',
    isRecent: false,
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [showSetupAlert, setShowSetupAlert] = useState(true);
  const [passkeys, setPasskeys] = useState(mockPasskeys);
  const navigate = useNavigate();
  
  return (
    <DashboardContainer>
      <BackButton variant="outline" onClick={() => navigate('/')}>
        <Home size={16} />
      </BackButton>

      <WelcomeSection>
        <Title>Welcome back, {user?.displayName || 'User'}!</Title>
        <Subtitle>Manage your passkeys and security settings</Subtitle>
        
        {showSetupAlert && (
          <Alert 
            variant="info" 
            title="Your account is protected by passkeys" 
            onClose={() => setShowSetupAlert(false)}
          >
            Passkeys provide stronger security than passwords. They're easier to use and protect against phishing attempts.
          </Alert>
        )}
      </WelcomeSection>
      
      <Grid>
        
        <Card>
          <CardContent>
            <IconWrapper>
              <Fingerprint />
            </IconWrapper>
            <CardTitle>Add New Passkey</CardTitle>
            <CardDescription>
              Register a new device to sign in quickly and securely without passwords.
            </CardDescription>
            <Button>
              <PlusCircle size={16} />
              Add Passkey
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <IconWrapper>
              <Shield />
            </IconWrapper>
            <CardTitle>Security Health</CardTitle>
            <CardDescription>
              Your account is secure with passkeys. No passwords to manage or remember.
            </CardDescription>
            <Button variant="outline">
              Security Settings
              <ArrowRight size={16} />
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <IconWrapper>
              <Smartphone />
            </IconWrapper>
            <CardTitle>Cross-Device Access</CardTitle>
            <CardDescription>
              Your passkeys work across all your devices, including mobile phones and tablets.
            </CardDescription>
            <Button variant="outline">
              Learn More
              <ArrowRight size={16} />
            </Button>
          </CardContent>
        </Card>
      </Grid>
      
      <Section>
        <SectionTitle>
          <KeyRound size={20} />
          Your Passkeys
        </SectionTitle>
        
        <KeysList>
          {passkeys.length > 0 ? (
            passkeys.map(key => (
              <KeyCard key={key.id}>
                <KeyDetails>
                  <IconWrapper style={{ width: '40px', height: '40px' }}>
                    <Key size={20} />
                  </IconWrapper>
                  <KeyInfo>
                    <KeyName>{key.name}</KeyName>
                    <KeyMeta>{key.type} • {key.lastUsed}</KeyMeta>
                  </KeyInfo>
                  {key.isRecent && (
                    <InfoBadge>
                      <Shield size={12} />
                      Recent
                    </InfoBadge>
                  )}
                </KeyDetails>
                <Button variant="ghost" size="sm">Manage</Button>
              </KeyCard>
            ))
          ) : (
            <EmptyState>
              <p>You haven't added any passkeys yet</p>
              <Button variant="outline" style={{ marginTop: '16px' }}>
                <PlusCircle size={16} />
                Add Your First Passkey
              </Button>
            </EmptyState>
          )}
        </KeysList>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;