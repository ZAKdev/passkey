import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { LogOut, Shield, User } from 'lucide-react';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
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
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.primary[600]};
  text-transform: uppercase;
  letter-spacing: -0.5px;
`;

const Main = styled.main`
  flex: 1;
  padding: ${props => props.theme.space[6]};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background-color: #f3f3f3;
`;

const Footer = styled.footer`
  background-color: white;
  border-top: 1px solid ${props => props.theme.colors.gray[200]};
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[6]};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[600]};
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  
  svg {
    margin-right: ${props => props.theme.space[2]};
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return <Container>{children}</Container>;
  }

  return (
    <Container>
      <Header>
        <Logo>
          GMX
        </Logo>
        {isAuthenticated && user && (
          <UserSection>
            <UserInfo>
              <User size={16} />
              {user.displayName}
            </UserInfo>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut size={16} />
              Logout
            </Button>
          </UserSection>
        )}
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Shield size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
        Secured with GMX WebAuthn &copy; {new Date().getFullYear()}
      </Footer>
    </Container>
  );
};

export default Layout;