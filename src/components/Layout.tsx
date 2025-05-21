import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { KeyRound, LogOut, Shield, User } from 'lucide-react';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${props => props.theme.shadows.sm};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.gray[900]};
    border-bottom-color: ${props => props.theme.colors.gray[700]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space[4]};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.primary[500]};
  
  svg {
    margin-right: ${props => props.theme.space[2]};
  }
`;

const Main = styled.main`
  flex: 1;
  padding: ${props => props.theme.space[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space[4]};
  }
`;

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.gray[100]};
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[6]};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.colors.gray[800]};
    color: ${props => props.theme.colors.gray[400]};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space[4]};
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    .user-name {
      display: none;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.sm};
  
  svg {
    margin-right: ${props => props.theme.space[2]};
  }
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.gray[300]};
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  
  // Don't show header/footer on auth pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return <Container>{children}</Container>;
  }

  return (
    <Container>
      <Header>
        <Logo>
          <KeyRound size={24} />
          <span>PassKey</span>
        </Logo>
        {isAuthenticated && user && (
          <UserSection>
            <UserInfo>
              <User size={16} />
              <span className="user-name">{user.displayName}</span>
            </UserInfo>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut size={16} />
              <span className="user-name">Logout</span>
            </Button>
          </UserSection>
        )}
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>
          <Shield size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Secured with WebAuthn Passkeys &copy; {new Date().getFullYear()}
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;