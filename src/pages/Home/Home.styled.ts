import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
    min-height: 100vh;
    background-color: white;
`;

export const Navbar = styled.nav`
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

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

export const UserSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const UserName = styled.span`
    color: white;
    font-size: 1rem;
    font-weight: 500;
`;

export const AuthButton = styled(Button)`
    background-color: white;
    color: #6e9804;
    border: none;
    
    &:hover {
        background-color: #f5f5f5;
        color: #6e9804;
    }
`;

export const HeroSection = styled.div`
    background: linear-gradient(135deg, #1e4b9c 0%, #2c3e50 100%);
    color: white;
    padding: 3rem 1rem;
    text-align: center;
    
    @media (min-width: 768px) {
        padding: 6rem 2rem;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
    }
`;

export const HeroSubtitle = styled.p`
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

export const UsersSection = styled.div`
    padding: 4rem 1rem;
    background-color: white;
    
    @media (min-width: 768px) {
        padding: 6rem 2rem;
    }
`;

export const UsersSectionTitle = styled.h2`
    text-align: center;
    color: #1e4b9c;
    font-size: 2rem;
    margin-bottom: 2rem;
`;

export const UsersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const UserCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    
    &:hover {
        transform: translateY(-4px);
    }
`;

export const UserAvatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: block;
`;

export const UserCardName = styled.h3`
    text-align: center;
    color: #1e4b9c;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
`;

export const UserCardEmail = styled.p`
    text-align: center;
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 1rem;
`;

export const FeaturesSection = styled.div`
    padding: 2rem 1rem;
    background-color: #f8f9fa;
    
    @media (min-width: 768px) {
        padding: 4rem 2rem;
    }
`;

export const FeaturesGrid = styled.div`
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

export const FeatureCard = styled.div`
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    @media (min-width: 768px) {
        padding: 2rem;
    }
`;

export const FeatureTitle = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: #1e4b9c;
    
    @media (min-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

export const FeatureDescription = styled.p`
    color: #666;
    line-height: 1.6;
    font-size: 0.875rem;
    
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;