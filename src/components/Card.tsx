import styled from 'styled-components';

interface CardProps {
  elevation?: 'sm' | 'md' | 'lg';
  padding?: keyof typeof paddings;
}

const paddings = {
  sm: 'var(--space-4)',
  md: 'var(--space-6)',
  lg: 'var(--space-8)',
};

const elevations = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
};

const Card = styled.div<CardProps>`
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: ${props => elevations[props.elevation || 'md']};
  padding: ${props => paddings[props.padding || 'md']};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--color-gray-800);
  }
`;

export default Card;